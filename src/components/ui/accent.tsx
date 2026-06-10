import * as React from 'react';

/**
 * Renders a headline string where a *word* wrapped in asterisks becomes the
 * italic serif accent (DESIGN.md §2 — "mix roman + italic in one line; the
 * italicised word is the emotional accent. Never bold the serif — use italic").
 *
 * Example: <Accent text="One *intention*." />  →  One <em>intention</em>.
 */
export function Accent({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <em key={i} className="italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}
