import type { ContactSubmission, TrialSubmission } from "@/lib/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s\-()]{6,}$/;

function hasText(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateContactSubmission(payload: ContactSubmission) {
  if (!hasText(payload.name) || !hasText(payload.message)) {
    return { valid: false, message: "Please complete your name and message." };
  }

  if (!hasText(payload.email) || !emailPattern.test(payload.email)) {
    return { valid: false, message: "Please provide a valid email address." };
  }

  if (!hasText(payload.phone) || !phonePattern.test(payload.phone)) {
    return { valid: false, message: "Please provide a valid phone number." };
  }

  if (payload.website && payload.website.trim().length > 0) {
    return { valid: false, message: "Spam protection triggered." };
  }

  return { valid: true, message: "ok" };
}

export function validateTrialSubmission(payload: TrialSubmission) {
  if (
    !hasText(payload.name) ||
    !hasText(payload.courseInterest) ||
    !hasText(payload.preferredTime) ||
    !hasText(payload.country)
  ) {
    return { valid: false, message: "Please complete all required booking details." };
  }

  if (!hasText(payload.email) || !emailPattern.test(payload.email)) {
    return { valid: false, message: "Please provide a valid email address." };
  }

  if (!hasText(payload.phone) || !phonePattern.test(payload.phone)) {
    return { valid: false, message: "Please provide a valid phone number." };
  }

  if (payload.website && payload.website.trim().length > 0) {
    return { valid: false, message: "Spam protection triggered." };
  }

  return { valid: true, message: "ok" };
}
