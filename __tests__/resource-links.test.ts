import { describe, expect, it } from "vitest";
import { getResourceActionLabel, isLocalResourceFile, isPdfResource } from "../lib/resource-links";

describe("resource link helpers", () => {
  it("treats site-relative files as local resources", () => {
    expect(isLocalResourceFile("/madani-qaida.pdf")).toBe(true);
    expect(isLocalResourceFile("https://example.com/resource")).toBe(false);
  });

  it("detects pdf downloads", () => {
    expect(isPdfResource("/madani-qaida.pdf")).toBe(true);
    expect(isPdfResource("/resource")).toBe(false);
    expect(isPdfResource("https://example.com/resource.pdf")).toBe(false);
  });

  it("uses action labels that match the destination type", () => {
    expect(getResourceActionLabel("/madani-qaida.pdf")).toBe("Download PDF");
    expect(getResourceActionLabel("https://example.com/resource")).toBe("Open Resource");
  });
});
