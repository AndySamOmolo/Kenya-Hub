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
      className="font-sans text-xs leading-5 p-0 align-baseline text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
    >
      Cookie Preferences
    </button>
  );
}
