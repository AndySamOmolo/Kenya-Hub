"use client";

export default function CookieSettingsFooterLink() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("kh-open-cookie-banner"));
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-[0.65rem] text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
    >
      Cookie Preferences
    </button>
  );
}
