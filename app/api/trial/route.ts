import { validateTrialSubmission } from "@/lib/forms";
import type { TrialSubmission } from "@/lib/types";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as TrialSubmission;
    const validation = validateTrialSubmission(payload);

    if (!validation.valid) {
      return Response.json({ success: false, message: validation.message }, { status: 400 });
    }

    const { error } = await supabase
      .from('trial_bookings')
      .insert([
        { 
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          course_interest: payload.courseInterest,
          preferred_time: payload.preferredTime,
          timezone: payload.timezone,
          message: payload.message || null
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return Response.json({ success: false, message: `Database error: ${error.message}` }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Your trial request was sent successfully.",
    });
  } catch (err: any) {
    console.error("Server Error:", err);
    return Response.json({ success: false, message: `Server error: ${err.message || 'Unknown'}` }, { status: 500 });
  }
}
