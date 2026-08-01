export function isLocalResourceFile(fileUrl: string) {
  return fileUrl.startsWith("/");
}

export function isPdfResource(fileUrl: string) {
  return isLocalResourceFile(fileUrl) && fileUrl.toLowerCase().endsWith(".pdf");
}

export function getResourceActionLabel(fileUrl: string) {
  return isPdfResource(fileUrl) ? "Download PDF" : "Open Resource";
}
