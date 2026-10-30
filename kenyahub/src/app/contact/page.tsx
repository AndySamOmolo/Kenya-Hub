"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CustomSelect from "@/components/ui/CustomSelect";

const CONTACT_EMAIL = "andysamonyango@gmail.com";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
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
    advertising: "Advertising / Sponsorship",
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto link with pre-filled subject and body
    const subjectLine = `[KenyaHub ${subjectLabels[formData.subject] || "Inquiry"}] from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Category: ${subjectLabels[formData.subject] || formData.subject}`,
      ``,
      `Message:`,
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary tracking-tight">
          Contact <span className="gradient-text-kenya">KenyaHub</span>
        </h1>
        <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
          Have feedback, spotted a statutory rate update, or interested in partnership opportunities? Reach the KenyaHub editorial and engineering desk directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <DynamicIcon emoji="✉️" className="w-8 h-8 text-gold" />
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Editorial &amp; Support Desk</h3>
            <p className="text-xs text-text-muted">For general inquiries, data corrections, or media requests:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-semibold text-gold hover:underline block break-all">
              {CONTACT_EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-elevated border border-border hover:border-gold/50 text-[0.6875rem] font-medium text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-kenya-green-light" />
                  <span className="text-kenya-green-light">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <DynamicIcon emoji="📢" className="w-8 h-8 text-gold" />
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Advertising &amp; Partnerships</h3>
            <p className="text-xs text-text-muted">Interested in reaching Kenyan digital audiences and decision-makers?</p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("[KenyaHub] Advertising Inquiry")}`} className="text-xs font-semibold text-gold hover:underline block break-all">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
            <DynamicIcon emoji="🚩" className="w-8 h-8 text-gold" />
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Report Data Updates</h3>
            <p className="text-xs text-text-muted">
              Did a KRA tax bracket, EPRA tariff, or matatu fare change recently? Let us know so our verification team can update the dataset.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-kenya-green/15 text-kenya-green-light flex items-center justify-center text-3xl mx-auto">
                <DynamicIcon emoji="✓" className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">Opening Your Email Client</h2>
              <p className="text-xs text-text-muted max-w-sm mx-auto">
                Your default email app should open with the message pre-filled. If it didn&apos;t open, copy our address below or email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-semibold">
                  {CONTACT_EMAIL}
                </a>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-text-primary rounded-lg border border-border hover:border-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-kenya-green-light" /> : <Copy className="w-3.5 h-3.5 text-gold" />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "general", message: "" }); }}
                  className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-gold rounded-lg border border-border hover:border-gold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-2">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-text-muted block mb-1">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Wanjiku Kamau"
                    className="input-field text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs text-text-muted block mb-1">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. wanjiku@example.com"
                    className="input-field text-sm"
                  />
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
                  <option value="advertising">Advertising / Sponsorship</option>
                </CustomSelect>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs text-text-muted block mb-1">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="input-field text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-vivid text-black font-bold text-sm rounded-xl shadow-lg hover:opacity-95 transition-opacity cursor-pointer"
              >
                Send Message →
              </button>

              <p className="text-[0.625rem] text-text-muted text-center">
                Opens your default email client pre-addressed to our editorial desk, or use the Copy Email button on the left.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
