"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Phone, Mail, BookOpen, Clock, Globe, Pencil, ArrowRight } from "lucide-react";
import { courseList } from "@/lib/content";
import type { TrialSubmission } from "@/lib/types";

type TrialBookingFormProps = {
  onSuccess?: () => void;
};

export default function TrialBookingForm({ onSuccess }: TrialBookingFormProps = {}) {
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrialSubmission>({
    defaultValues: { country: "United Kingdom", website: "" },
  });

  async function onSubmit(values: TrialSubmission) {
    setError(null);

    const response = await fetch("/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as { success: boolean; message: string };

    if (!response.ok || !data.success) {
      setError(data.message);
      return;
    }

    reset({ country: "United Kingdom", website: "" });
    if (onSuccess) onSuccess();
  }

  // Premium input styling class
  const baseInputClass =
    "w-full rounded-[20px] border border-[rgba(15,77,58,0.1)] bg-[rgba(255,255,255,0.7)] px-5 py-4 pl-12 text-sm text-[#13281f] placeholder:text-[#8b9992] outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-4 focus:ring-[rgba(200,155,60,0.1)] hover:border-[rgba(15,77,58,0.2)]";

  return (
    <form className="grid gap-6 md:gap-8" onSubmit={handleSubmit(onSubmit)}>
      <input className="hidden" tabIndex={-1} {...register("website")} />
      
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Full Name */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-name">
            Full name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
            <input 
              className={baseInputClass} 
              id="trial-name" 
              placeholder="Full name" 
              {...register("name", { required: "Name is required." })} 
            />
          </div>
          {errors.name && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.name.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-phone">
            Phone number
          </label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
            <input 
              className={baseInputClass} 
              id="trial-phone" 
              placeholder="Phone number" 
              {...register("phone", { required: "Phone is required." })} 
            />
          </div>
          {errors.phone && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Email Address */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-email">
            Email address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
            <input 
              className={baseInputClass} 
              id="trial-email" 
              placeholder="Email address" 
              type="email" 
              {...register("email", { required: "Email is required." })} 
            />
          </div>
          {errors.email && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.email.message}</p>}
        </div>

        {/* Course Interest */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-course">
            Course interest
          </label>
          <div className="relative group">
            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] z-10 transition-transform duration-300 group-focus-within:scale-110" />
            <select 
              className={`${baseInputClass} appearance-none cursor-pointer`} 
              id="trial-course" 
              {...register("courseInterest", { required: "Course interest is required." })}
            >
              <option value="" disabled selected hidden>Select course interest</option>
              {courseList.map((course) => (
                <option key={course.slug} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow to match theme */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[#30453c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.courseInterest && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.courseInterest.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Preferred Time */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-time">
            Preferred time
          </label>
          <div className="relative group">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
            <input
              className={baseInputClass}
              id="trial-time"
              placeholder="Preferred time"
              {...register("preferredTime", { required: "Preferred time is required." })}
            />
          </div>
          {errors.preferredTime && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.preferredTime.message}</p>}
        </div>

        {/* Country */}
        <div className="grid gap-2">
          <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-country">
            Country
          </label>
          <div className="relative group">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
            <input 
              className={baseInputClass} 
              id="trial-country" 
              placeholder="Country" 
              {...register("country", { required: "Country is required." })} 
            />
          </div>
          {errors.country && <p className="ml-2 mt-1 text-[0.8rem] text-red-600 font-medium">{errors.country.message}</p>}
        </div>
      </div>

      {/* Notes */}
      <div className="grid gap-2">
        <label className="ml-2 text-[0.82rem] font-semibold tracking-wide text-[#30453c]" htmlFor="trial-message">
          Notes
        </label>
        <div className="relative group">
          <Pencil className="absolute left-4 top-5 h-5 w-5 text-[#C9A227] transition-transform duration-300 group-focus-within:scale-110" />
          <textarea 
            className={`${baseInputClass} min-h-36 resize-y pt-4`} 
            id="trial-message" 
            placeholder="Anything we should know?" 
            {...register("message")} 
          />
        </div>
      </div>

      {/* Submit Section */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button 
          disabled={isSubmitting} 
          type="submit"
          className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#0F4C3A] px-10 text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#135A46] hover:shadow-[0_12px_30px_rgba(15,77,58,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">{isSubmitting ? "Sending..." : "Book Free Trial"}</span>
          {!isSubmitting && (
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
        
        <div className="flex-1 w-full">
          {error && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 w-full">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              {error}
            </div>
          )}
        </div>
      </div>

    </form>
  );
}
