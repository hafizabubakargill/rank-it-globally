"use client";

import { useState } from "react";

export type BlogPostFaq = {
  _key?: string;
  question: string;
  answer: string;
};

export function BlogPostFaqs({ faqs }: { faqs: BlogPostFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="blog-post-faqs" aria-labelledby="blog-post-faq-title">
      <div className="blog-post-faq-heading">
        <p className="blog-kicker">Common Questions</p>
        <h2 id="blog-post-faq-title">Frequently Asked Questions</h2>
      </div>
      <div className="blog-post-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `blog-faq-panel-${index}`;
          const buttonId = `blog-faq-button-${index}`;

          return (
            <div className={`blog-post-faq-item${isOpen ? " is-open" : ""}`} key={faq._key || faq.question}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="blog-post-faq-icon" aria-hidden="true">+</span>
              </button>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
