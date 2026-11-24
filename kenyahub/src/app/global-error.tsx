"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body data-error-page="true" data-adsense-pause="true">
        <div
          data-error-page="true"
          data-adsense-pause="true"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>
            Something went wrong
          </h1>
          <p style={{ maxWidth: "460px", opacity: 0.8, marginBottom: "20px" }}>
            {error?.message || "An unexpected application error occurred."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              background: "#D4A017",
              color: "#1A1108",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
