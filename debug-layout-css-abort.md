# Debug Session: layout-css-abort

- Status: CLOSED
- Started: 2026-07-31
- Resolved: 2026-07-31
- Symptom: Browser reports `net::ERR_ABORTED` for `/_next/static/css/app/layout.css?...` and the page can appear unstyled.
- Scope: Local preview at `http://localhost:3000`

## Root Cause

The issue was caused by duplicate `next dev` processes for the same app:

1. An older `node` process was already listening on port `3000`.
2. A new `next dev` session detected the port conflict and moved to `3001`.
3. The stale server on `3000` was serving a broken dev state and returning a `500` with:
   `ENOENT: no such file or directory, open '.next/server/pages/_document.js'`
4. Browser tabs still pointed at `http://localhost:3000`, so the HTML and `/_next/static/...` asset requests came from the stale session instead of the fresh one.

This was a dev-session state problem, not an application stylesheet bug.

## Evidence Log

- `next build` completed successfully, which ruled out a production build error.
- `npm run lint` completed successfully.
- Port `3000` was owned by an existing `node.exe` process running Next.
- A newly started dev server moved to `http://localhost:3001`.
- Requests to `http://localhost:3000` returned a `500` with missing `.next/server/pages/_document.js`.
- Requests to `http://localhost:3001` returned `200`.

## Resolution

1. Remove the temporary debug instrumentation from `app/layout.tsx`.
2. Stop stale Next dev processes.
3. Remove `.next` to clear mixed build artifacts.
4. Restart `npm run dev` and use the active port shown in the server output.

## Prevention

- Keep only one `next dev` process running for this project at a time.
- If styles or `_next/static` assets start failing locally, stop all Next processes for the repo, delete `.next`, and restart the dev server before investigating app code.
