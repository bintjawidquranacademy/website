import { describe, expect, it } from "vitest";
import { validateContactSubmission, validateTrialSubmission } from "../lib/forms";

describe("validateContactSubmission", () => {
  it("accepts a valid payload", () => {
    const result = validateContactSubmission({
      name: "Aisha Khan",
      email: "aisha@example.com",
      phone: "+44 7000 000000",
      message: "I would like more information.",
      website: "",
    });

    expect(result.valid).toBe(true);
  });

  it("rejects spam honeypot submissions", () => {
    const result = validateContactSubmission({
      name: "Spam",
      email: "spam@example.com",
      phone: "+44 7000 000000",
      message: "Spam message",
      website: "https://spam.example",
    });

    expect(result.valid).toBe(false);
  });
});

describe("validateTrialSubmission", () => {
  it("accepts a valid trial request", () => {
    const result = validateTrialSubmission({
      name: "Muhammad Ali",
      email: "ali@example.com",
      phone: "+1 555 111 1111",
      courseInterest: "Hifz",
      preferredTime: "Weekday evenings",
      timezone: "Europe/London",
      message: "Looking for a teacher.",
      website: "",
    });

    expect(result.valid).toBe(true);
  });

  it("rejects invalid email addresses", () => {
    const result = validateTrialSubmission({
      name: "Muhammad Ali",
      email: "invalid-email",
      phone: "+1 555 111 1111",
      courseInterest: "Hifz",
      preferredTime: "Weekday evenings",
      timezone: "Europe/London",
      message: "",
      website: "",
    });

    expect(result.valid).toBe(false);
  });
});
