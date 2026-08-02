"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { User, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import type { ContactSubmission } from "@/lib/types";

const inputWrapperClass = "relative group flex items-center";
const iconClass = "absolute left-4 h-5 w-5 text-[#0F3D2E]/40 transition-colors duration-300 group-focus-within:text-[#C9A227]";
const inputClass =
  "w-full rounded-[20px] border border-[var(--line)] bg-white/70 py-3.5 pl-12 pr-4 text-[0.85rem] text-[var(--ink)] shadow-[0_2px_10px_rgba(18,40,30,0.02)] backdrop-blur-sm transition-all duration-300 placeholder:text-[var(--muted)] hover:border-[#C9A227]/40 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C9A227]/10";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSubmission>({
    defaultValues: { website: "" },
  });

  async function onSubmit(values: ContactSubmission) {
    setStatus(null);
    setError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as { success: boolean; message: string };

    if (!response.ok || !data.success) {
      setError(data.message);
      return;
    }

    reset();
    setStatus(data.message);
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
      <input className="hidden" tabIndex={-1} {...register("website")} />
      
      <div className="grid gap-1.5">
        <div className={inputWrapperClass}>
          <User className={iconClass} />
          <input
            className={inputClass}
            id="contact-name"
            placeholder="Full name"
            {...register("name", { required: "Name is required." })}
          />
        </div>
        {errors.name && <p className="text-[0.75rem] text-red-500 pl-4">{errors.name.message}</p>}
      </div>

      <div className="grid gap-1.5">
        <div className={inputWrapperClass}>
          <Mail className={iconClass} />
          <input
            className={inputClass}
            id="contact-email"
            placeholder="Email address"
            type="email"
            {...register("email", { required: "Email is required." })}
          />
        </div>
        {errors.email && <p className="text-[0.75rem] text-red-500 pl-4">{errors.email.message}</p>}
      </div>

      <div className="grid gap-1.5">
        <div className={inputWrapperClass}>
          <Phone className={iconClass} />
          <input
            className={inputClass}
            id="contact-phone"
            placeholder="Phone number"
            {...register("phone", { required: "Phone number is required." })}
          />
        </div>
        {errors.phone && <p className="text-[0.75rem] text-red-500 pl-4">{errors.phone.message}</p>}
      </div>

      <div className="grid gap-1.5">
        <div className={`${inputWrapperClass} items-start`}>
          <MessageSquare className={`${iconClass} top-4`} />
          <textarea
            className={`${inputClass} min-h-[120px] resize-none pt-4`}
            id="contact-message"
            placeholder="Tell us what you need help with"
            {...register("message", { required: "Message is required." })}
          />
        </div>
        {errors.message && <p className="text-[0.75rem] text-red-500 pl-4">{errors.message.message}</p>}
      </div>

      <div className="mt-2 flex flex-col gap-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className="group flex w-full items-center justify-between rounded-full bg-[#082E23] px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_8px_20px_rgba(8,46,35,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F3D2E] hover:shadow-[0_12px_25px_rgba(8,46,35,0.3)] disabled:opacity-70 disabled:hover:translate-y-0"
        >
          <span className="text-white">{isSubmitting ? "Sending..." : "Send Message"}</span>
          <ArrowRight className="h-4 w-4 text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {error && <p className="text-[0.8rem] text-red-600 font-medium text-center">{error}</p>}
      </div>

      {/* Success Image */}
      {status && (
        <div className="mt-4 w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,77,58,0.15)]">
          <Image
            src="/after form.png"
            alt="Thank you – our team will contact you shortly"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}
    </form>
  );
}
