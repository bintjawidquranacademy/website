import { validateContactSubmission } from "@/lib/forms";
import type { ContactSubmission } from "@/lib/types";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactSubmission;
  const validation = validateContactSubmission(payload);

  if (!validation.valid) {
    return Response.json({ success: false, message: validation.message }, { status: 400 });
  }

  return Response.json({
    success: true,
    message: "Your message was sent successfully.",
  });
}
