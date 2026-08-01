import { validateTrialSubmission } from "@/lib/forms";
import type { TrialSubmission } from "@/lib/types";

export async function POST(request: Request) {
  const payload = (await request.json()) as TrialSubmission;
  const validation = validateTrialSubmission(payload);

  if (!validation.valid) {
    return Response.json({ success: false, message: validation.message }, { status: 400 });
  }

  return Response.json({
    success: true,
    message: "Your trial request was sent successfully.",
  });
}
