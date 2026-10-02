import { GrammarSection } from "@/data/courses/types";

export default function GrammarView({
  sections,
  languageName,
}: {
  sections: GrammarSection[];
  languageName: string;
}) {
  if (!sections || sections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-text-muted">
        <p>No grammar references available for {languageName} yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      {sections.map((section) => (
        <section
          key={section.id}
          className="rounded-2xl border border-border bg-bg-card p-5 shadow-sm sm:p-8"
        >
          <h2 className="mb-2 font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-primary">
            {section.title}
          </h2>
          <p className="mb-6 text-sm font-medium text-gold">
            {section.summary}
          </p>
          <div className="prose prose-sm dark:prose-invert max-w-none mb-6 whitespace-pre-line text-text-secondary">
            {section.content}
          </div>

          {section.examples && section.examples.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-bg-elevated p-4">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-muted">
                Examples
              </h3>
              <div className="space-y-4">
                {section.examples.map((ex, idx) => {
                  // Find the target language key (anything that isn't english or explanation)
                  const targetKey = Object.keys(ex).find(
                    (k) => k !== "english" && k !== "explanation"
                  );
                  const targetText = targetKey ? (ex as any)[targetKey] : "";

                  return (
                    <div
                      key={idx}
                      className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-text-primary">
                          {targetText}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {ex.english}
                        </p>
                      </div>
                      {ex.explanation && (
                        <div className="mt-1 flex-1 text-xs text-text-muted sm:mt-0 sm:text-right">
                          <span className="inline-block rounded-md bg-kenya-green/10 px-2 py-1 text-kenya-green">
                            {ex.explanation}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
