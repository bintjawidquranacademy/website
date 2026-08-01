import { validateContactSubmission } from "@/lib/forms";
import type { ContactSubmission } from "@/lib/types";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactSubmission;
    const validation = validateContactSubmission(payload);

    if (!validation.valid) {
      return Response.json({ success: false, message: validation.message }, { status: 400 });
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        { 
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return Response.json({ success: false, message: `Database error: ${error.message}` }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Your message was sent successfully.",
    });
  } catch (err: unknown) {
    console.error("Server Error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return Response.json({ success: false, message: `Server error: ${errorMessage}` }, { status: 500 });
  }
}
