import { createServer } from "node:http";
import { mkdirSync, writeFileSync, appendFileSync, existsSync, truncateSync } from "node:fs";
import { resolve } from "node:path";

const sessionId = "layout-css-abort";
const outdir = resolve(".dbg");
const port = 7777;
const logFile = resolve(outdir, `trae-debug-log-${sessionId}.ndjson`);
const envFile = resolve(outdir, `${sessionId}.env`);

mkdirSync(outdir, { recursive: true });
if (existsSync(logFile)) truncateSync(logFile, 0);
writeFileSync(
  envFile,
  `DEBUG_SERVER_URL=http://127.0.0.1:${port}/event\nDEBUG_SESSION_ID=${sessionId}\n`,
  "utf8",
);

const send = (res, status, body = "") => {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(body);
};

const server = createServer((req, res) => {
  if (!req.url) return send(res, 404, JSON.stringify({ error: "missing-url" }));

  if (req.method === "OPTIONS" && req.url === "/event") {
    return send(res, 204);
  }

  if (req.method === "GET" && req.url === "/health") {
    return send(
      res,
      200,
      JSON.stringify({ ok: true, sessionId, logFile, envFile, port }, null, 2),
    );
  }

  if (req.method === "DELETE" && req.url === "/logs") {
    if (existsSync(logFile)) truncateSync(logFile, 0);
    return send(res, 200, JSON.stringify({ ok: true }));
  }

  if (req.method === "POST" && req.url === "/event") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        if (!parsed.ts) parsed.ts = Date.now();
        appendFileSync(logFile, `${JSON.stringify(parsed)}\n`, "utf8");
        send(res, 200, JSON.stringify({ ok: true }));
      } catch (error) {
        send(res, 400, JSON.stringify({ ok: false, error: String(error) }));
      }
    });
    return;
  }

  send(res, 404, JSON.stringify({ error: "not-found" }));
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write("@@DEBUG_SERVER_INFO\n");
  process.stdout.write(
    `${JSON.stringify(
      {
        api_url: `http://127.0.0.1:${port}/event`,
        session_id: sessionId,
        log_dir: outdir,
        log_file: logFile,
        env_file: envFile,
      },
      null,
      2,
    )}\n`,
  );
  process.stdout.write("@@END_DEBUG_SERVER_INFO\n");
});
