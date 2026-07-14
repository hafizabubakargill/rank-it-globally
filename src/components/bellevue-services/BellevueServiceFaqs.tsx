"use client";

import { useState } from "react";

export type BellevueFaqItem = {
  question: string;
  answer: string;
};

export function BellevueServiceFaqs({
  items,
  idPrefix,
}: {
  items: BellevueFaqItem[];
  idPrefix: string;
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
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
