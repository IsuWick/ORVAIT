"use client";
import Image from "next/image";
import { useState } from "react";

export type ClientStep = {
  label: string;
  badge: string;
  status: "live" | "ongoing" | "phase";
  desc: string;
};

export type ClientStory = {
  name: string;
  monogram: string;
  /** Logo file in /public. Falls back to the monogram letters when missing. */
  logo?: string;
  industry: string;
  summary: string;
  steps: ClientStep[];
  outcome: string;
  services: string[];
  href?: string;
};

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/**
 * Homepage clients section: the client list on the left, and the story for the
 * selected client in a panel that is always on screen. Pointing at (or tapping)
 * a client swaps the panel. Story copy is passed in from the page.
 */
export default function ClientStories({ stories }: { stories: ClientStory[] }) {
  const [activeName, setActiveName] = useState(stories[0]?.name ?? "");
  const active = stories.find(s => s.name === activeName) ?? stories[0];

  if (!active) return null;

  return (
    <div className="home-clients-layout">
      <div className="home-client-list">
        {stories.map(s => {
          const isActive = s.name === active.name;

          return (
            <button
              key={s.name}
              type="button"
              className={`home-client-btn${isActive ? " is-active" : ""}`}
              aria-controls="client-story-panel"
              onMouseEnter={() => setActiveName(s.name)}
              onFocus={() => setActiveName(s.name)}
              onClick={() => setActiveName(s.name)}
            >
              <span className={`home-client-mono${s.logo ? " has-logo" : ""}`} aria-hidden="true">
                {s.logo
                  ? <Image src={s.logo} alt="" width={36} height={36} className="home-client-logo" />
                  : s.monogram}
              </span>
              <span className="home-client-name">{s.name}</span>
              <span className="home-client-chevron" aria-hidden="true"><ChevronIcon /></span>
            </button>
          );
        })}
      </div>

      <div className="home-client-panel" id="client-story-panel" aria-live="polite">
        {/* key remounts the panel on change, replaying the fade-in */}
        <div className="home-client-panel-inner" key={active.name}>
          <div className="home-client-pop-head">
            <span className={`home-client-pop-mono${active.logo ? " has-logo" : ""}`} aria-hidden="true">
              {active.logo
                ? <Image src={active.logo} alt="" width={48} height={48} className="home-client-logo" />
                : active.monogram}
            </span>
            <span>
              <span className="home-client-pop-name">{active.name}</span>
              <span className="home-client-pop-industry">{active.industry}</span>
            </span>
          </div>

          <div className="home-client-panel-cols">
            <div>
              <p className="home-client-summary">{active.summary}</p>

              <ol className="home-client-steps">
                {active.steps.map(step => (
                  <li key={step.label} data-status={step.status}>
                    <span className="home-client-step-head">
                      <span className="home-client-step-name">{step.label}</span>
                      <span className={`home-client-badge is-${step.status}`}>{step.badge}</span>
                    </span>
                    <p>{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="home-client-panel-side">
              <div className="home-client-outcome">
                <h4>Result</h4>
                <p>{active.outcome}</p>
              </div>

              <div className="home-client-foot">
                <span className="home-client-tags">
                  {active.services.map(t => <span key={t}>{t}</span>)}
                </span>
                {active.href && (
                  <a className="home-client-visit" href={active.href} target="_blank" rel="noopener noreferrer">
                    Visit site <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
