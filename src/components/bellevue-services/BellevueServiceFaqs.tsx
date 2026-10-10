"use client";

import { useState, type ReactNode } from "react";

export type BellevueFaqItem = {
  question: string;
  answer: string;
};

export function BellevueServiceFaqs({
  items,
  idPrefix,
  renderedAnswers,
}: {
  items: BellevueFaqItem[];
  idPrefix: string;
  renderedAnswers?: ReactNode[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="eastside-faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-faq-panel-${index}`;

        return (
          <article className={isOpen ? "is-open" : undefined} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="eastside-faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p>{renderedAnswers?.[index] ?? item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
