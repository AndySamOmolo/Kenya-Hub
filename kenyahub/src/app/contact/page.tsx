"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
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
          Have feedback, found a data discrepancy, or interested in advertising opportunities? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <span className="text-2xl">✉️</span>
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Direct Email</h3>
            <p className="text-xs text-text-muted">For general inquiries, editorial corrections, or media inquiries:</p>
            <a href="mailto:andysamonyango@gmail.com" className="text-xs font-semibold text-gold hover:underline block">
              andysamonyango@gmail.com
            </a>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <span className="text-2xl">📢</span>
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Advertising & Partnerships</h3>
            <p className="text-xs text-text-muted">Interested in reaching out to Kenyan digital audiences and decision-makers?</p>
            <a href="mailto:andysamonyango@gmail.com" className="text-xs font-semibold text-gold hover:underline block">
              andysamonyango@gmail.com
            </a>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
            <span className="text-2xl">🚩</span>
            <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Report Data Errors</h3>
            <p className="text-xs text-text-muted">
              Did a tax rate or matatu fare change recently? Let us know so our verification team can update the tool.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-kenya-green/15 text-kenya-green-light flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>
              <h2 className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">Message Sent!</h2>
              <p className="text-xs text-text-muted max-w-sm mx-auto">
                Thank you for reaching out to KenyaHub. Our team will review your message and respond shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "general", message: "" }); }}
                className="px-4 py-2 bg-bg-elevated text-xs font-semibold text-gold rounded-lg border border-border hover:border-gold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-2">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-text-muted block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Wanjiku Kamau"
                    className="input-field text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-text-muted block mb-1">Email Address *</label>
                  <input
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
                <label className="text-xs text-text-muted block mb-1">Topic / Category</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field text-sm"
                >
                  <option value="general">General Inquiry</option>
                  <option value="correction">Report Data Discrepancy / Bug</option>
                  <option value="suggestion">Suggest a New Tool</option>
                  <option value="advertising">Advertising / Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-text-muted block mb-1">Message *</label>
                <textarea
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
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-vivid text-black font-bold text-sm rounded-xl shadow-lg hover:opacity-95 transition-opacity"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
