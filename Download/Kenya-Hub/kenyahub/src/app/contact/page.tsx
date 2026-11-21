"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, X, AlertCircle } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CustomSelect from "@/components/ui/CustomSelect";

const CONTACT_EMAIL = "contact@kenyahub.me";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const subjectLabels: Record<string, string> = {
    general: "General Inquiry",
    correction: "Data Discrepancy / Bug Report",
    suggestion: "New Tool Suggestion",
    privacy: "Data Protection & Privacy Inquiry (ODPC / GDPR)",
    advertising: "Advertising / Sponsorship",
  };

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = "Please enter a valid email address (e.g. wanjiku@example.com).";
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = "Please enter a message of at least 10 characters.";
    }
    return nextErrors;
  };

  const buildFormattedMessage = () => {
    const subjectLine = `[KenyaHub ${subjectLabels[formData.subject] || "Inquiry"}] from ${formData.name.trim() || "Visitor"}`;
    const body = [
      `To: ${CONTACT_EMAIL}`,
      `Subject: ${subjectLine}`,
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Category: ${subjectLabels[formData.subject] || formData.subject}`,
      ``,
      `Message:`,
      formData.message.trim(),
    ].join("\n");
    return { subjectLine, body };
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyFullMessage = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const { body } = buildFormattedMessage();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(body);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const { subjectLine } = buildFormattedMessage();
    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Category: ${subjectLabels[formData.subject] || formData.subject}`,
      ``,
      `Message:`,
      formData.message.trim(),
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact KenyaHub — Editorial & Engineering Desk",
    url: "https://kenyahub.me/contact/",
    inLanguage: "en-KE",
    mainEntity: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
      email: CONTACT_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
        contactType: "customer support",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://kenyahub.me/contact/" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Contact Us</span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary tracking-tight">
          Contact <span className="gradient-text-kenya">KenyaHub</span>
        </h1>
        <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
          Have feedback, spotted a statutory rate update, or have a data protection &amp; privacy inquiry? Reach the KenyaHub editorial and engineering desk directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <DynamicIcon emoji="✉️" className="w-8 h-8 text-gold" />
            <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Editorial &amp; Support Desk</h2>
            <p className="text-xs text-text-muted">For general inquiries, data corrections, or media requests:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-semibold text-gold hover:underline block break-all">
              {CONTACT_EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-border hover:border-gold/50 text-xs font-medium text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-kenya-green-light" aria-hidden="true" />
                  <span className="text-kenya-green-light">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2.5">
            <DynamicIcon emoji="🔒" className="w-8 h-8 text-gold" />
            <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Data Protection &amp; Privacy</h2>
            <p className="text-xs text-text-muted">
              For inquiries under the Kenya Data Protection Act (2019), GDPR, or cookie consent preferences, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("[KenyaHub] Data Protection & Privacy Inquiry")}`}
                className="text-gold hover:underline font-semibold"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              or review our <Link href="/privacy/" className="text-gold hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <DynamicIcon emoji="📢" className="w-8 h-8 text-gold" />
            <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Advertising &amp; Partnerships</h2>
            <p className="text-xs text-text-muted">Interested in reaching Kenyan digital audiences and decision-makers?</p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("[KenyaHub] Advertising Inquiry")}`} className="text-xs font-semibold text-gold hover:underline block break-all">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
            <DynamicIcon emoji="🚩" className="w-8 h-8 text-gold" />
            <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Report Data Updates</h2>
            <p className="text-xs text-text-muted">
              Did a KRA tax bracket, EPRA tariff, or matatu fare change recently? Let us know so our verification team can update the dataset.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-kenya-green/15 text-kenya-green-light flex items-center justify-center text-3xl mx-auto">
                <DynamicIcon emoji="✓" className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">Opening Your Email Client</h2>
              <p className="text-xs text-text-muted max-w-sm mx-auto text-balance">
                Your default email app should open with the message pre-filled. Using webmail or didn&apos;t see it open? Copy the formatted message or address below and send to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-semibold">
                  {CONTACT_EMAIL}
                </a>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyFullMessage}
                  className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-text-primary rounded-lg border border-border hover:border-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedMessage ? <Check className="w-3.5 h-3.5 text-kenya-green-light" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5 text-gold" aria-hidden="true" />}
                  <span>{copiedMessage ? "Message Copied!" : "Copy Message to Clipboard"}</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-text-primary rounded-lg border border-border hover:border-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-kenya-green-light" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5 text-gold" aria-hidden="true" />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setErrors({}); setFormData({ name: "", email: "", subject: "general", message: "" }); }}
                  className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-gold rounded-lg border border-border hover:border-gold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-2">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-text-muted block mb-1">Your Name *</label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Wanjiku Kamau"
                      className="input-field text-sm pr-10!"
                      style={{ paddingRight: "2.5rem" }}
                    />
                    {formData.name && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, name: "" })}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                        aria-label="Clear name"
                      >
                        <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1 text-xs text-kenya-red-light flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs text-text-muted block mb-1">Email Address *</label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="wanjiku@example.com"
                      className="input-field text-sm pr-10!"
                      style={{ paddingRight: "2.5rem" }}
                    />
                    {formData.email && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, email: "" })}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                        aria-label="Clear email"
                      >
                        <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="mt-1 text-xs text-kenya-red-light flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-xs text-text-muted block mb-1">Topic / Category</label>
                <CustomSelect
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field text-sm"
                >
                  <option value="general">General Inquiry</option>
                  <option value="correction">Report Data Discrepancy / Bug</option>
                  <option value="suggestion">Suggest a New Tool</option>
                  <option value="privacy">Data Protection &amp; Privacy Inquiry (ODPC / GDPR)</option>
                  <option value="advertising">Advertising / Sponsorship</option>
                </CustomSelect>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs text-text-muted block mb-1">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="How can we help you?"
                  className="input-field text-sm resize-none"
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-1 text-xs text-kenya-red-light flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-gold to-gold-vivid text-black font-bold text-sm rounded-xl shadow-lg hover:opacity-95 transition-opacity cursor-pointer"
                >
                  Send Message →
                </button>
                <button
                  type="button"
                  onClick={handleCopyFullMessage}
                  className="py-3 px-4 rounded-lg bg-bg-elevated border border-border hover:border-gold/60 text-xs font-semibold text-text-primary hover:text-gold transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-kenya-green-light" aria-hidden="true" />
                      <span className="text-kenya-green-light">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-text-muted text-center text-balance">
                Opens your email app pre-addressed to our desk, or use Copy Email Address.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
