import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatList(items: string[]) {
  return new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).format(items);
}

export function toTitle(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
