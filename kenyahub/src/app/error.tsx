"use client";

import Link from "next/link";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      data-error-page="true"
      className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-16 text-center"
    >
      <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
      <p className="mt-3 text-sm opacity-80">
        {error?.message || "An unexpected error occurred while rendering this page."}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-amber-400"
        >
          Try again
        </button>
        <Link
          href="/"
          prefetch={false}
          className="rounded-lg border border-current/20 px-4 py-2 text-sm font-medium hover:bg-current/5"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
