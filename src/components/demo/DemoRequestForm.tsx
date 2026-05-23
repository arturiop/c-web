'use client';

import { useState } from 'react';

const teamSizeOptions = ['1-5 people', '6-20 people', '21-50 people', '51+ people'] as const;

const timelineOptions = [
  'As soon as possible',
  'Within this month',
  'Within this quarter',
  'Just exploring',
] as const;

type FormState = {
  fullName: string;
  workEmail: string;
  companyName: string;
  role: string;
  website: string;
  teamSize: string;
  timeline: string;
  workflow: string;
  goals: string;
};

const initialState: FormState = {
  fullName: '',
  workEmail: '',
  companyName: '',
  role: '',
  website: '',
  teamSize: '',
  timeline: '',
  workflow: '',
  goals: '',
};

const fieldClassName =
  'mt-2 w-full rounded-2xl border border-[var(--color-watchable-line)] bg-white px-4 py-3 text-base text-[var(--color-watchable-ink)] outline-none transition placeholder:text-[color:rgb(20_20_23_/_0.38)] focus:border-[var(--color-watchable-accent)] focus:ring-2 focus:ring-[color:rgb(255_122_26_/_0.14)]';

const buildMailtoHref = (state: FormState) => {
  const subject = `Watchable demo request from ${state.companyName || state.fullName}`;
  const body = [
    'Hi Watchable team,',
    '',
    'I would like to book a demo.',
    '',
    `Name: ${state.fullName}`,
    `Work email: ${state.workEmail}`,
    `Company: ${state.companyName}`,
    `Role: ${state.role}`,
    `Website: ${state.website || 'N/A'}`,
    `Team size: ${state.teamSize || 'N/A'}`,
    `Timeline: ${state.timeline || 'N/A'}`,
    '',
    'Current workflow:',
    state.workflow,
    '',
    'What we want to improve:',
    state.goals,
  ].join('\n');

  return `mailto:hello@watchable-ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const DemoRequestForm = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const setField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  return (
    <section className="watchable-panel rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
      <div className="mb-6">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Demo form
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Tell us how your team works today
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-watchable-muted)]">
          This keeps the demo focused on your creative workflow instead of a generic walkthrough.
        </p>
      </div>

      <form
        className="grid gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          setIsSubmitted(true);
          window.location.href = buildMailtoHref(formState);
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label
            htmlFor="demo-full-name"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Full name
            <input
              id="demo-full-name"
              aria-label="Full name"
              required
              name="fullName"
              autoComplete="name"
              value={formState.fullName}
              onChange={(event) => {
                setField('fullName', event.target.value);
              }}
              className={fieldClassName}
              placeholder="Jane Smith"
            />
          </label>

          <label
            htmlFor="demo-work-email"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Work email
            <input
              id="demo-work-email"
              aria-label="Work email"
              required
              type="email"
              name="workEmail"
              autoComplete="email"
              value={formState.workEmail}
              onChange={(event) => {
                setField('workEmail', event.target.value);
              }}
              className={fieldClassName}
              placeholder="jane@brand.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label
            htmlFor="demo-company-name"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Company name
            <input
              id="demo-company-name"
              aria-label="Company name"
              required
              name="companyName"
              autoComplete="organization"
              value={formState.companyName}
              onChange={(event) => {
                setField('companyName', event.target.value);
              }}
              className={fieldClassName}
              placeholder="North Coast Beauty"
            />
          </label>

          <label
            htmlFor="demo-role"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Role
            <input
              id="demo-role"
              aria-label="Role"
              required
              name="role"
              autoComplete="organization-title"
              value={formState.role}
              onChange={(event) => {
                setField('role', event.target.value);
              }}
              className={fieldClassName}
              placeholder="Growth lead"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <label
            htmlFor="demo-website"
            className="block text-sm font-medium text-[var(--color-watchable-ink)] md:col-span-1"
          >
            Website
            <input
              id="demo-website"
              aria-label="Website"
              type="url"
              name="website"
              autoComplete="url"
              value={formState.website}
              onChange={(event) => {
                setField('website', event.target.value);
              }}
              className={fieldClassName}
              placeholder="https://brand.com"
            />
          </label>

          <label
            htmlFor="demo-team-size"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Team size
            <select
              id="demo-team-size"
              aria-label="Team size"
              name="teamSize"
              value={formState.teamSize}
              onChange={(event) => {
                setField('teamSize', event.target.value);
              }}
              className={fieldClassName}
            >
              <option value="">Select team size</option>
              {teamSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label
            htmlFor="demo-timeline"
            className="block text-sm font-medium text-[var(--color-watchable-ink)]"
          >
            Timeline
            <select
              id="demo-timeline"
              aria-label="Timeline"
              name="timeline"
              value={formState.timeline}
              onChange={(event) => {
                setField('timeline', event.target.value);
              }}
              className={fieldClassName}
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label
          htmlFor="demo-workflow"
          className="block text-sm font-medium text-[var(--color-watchable-ink)]"
        >
          Current workflow
          <textarea
            id="demo-workflow"
            aria-label="Current workflow"
            required
            name="workflow"
            rows={5}
            value={formState.workflow}
            onChange={(event) => {
              setField('workflow', event.target.value);
            }}
            className={fieldClassName}
            placeholder="How does your team currently move from product context to hooks, scripts, storyboards, and launch-ready creative?"
          />
        </label>

        <label
          htmlFor="demo-goals"
          className="block text-sm font-medium text-[var(--color-watchable-ink)]"
        >
          What do you want the demo to cover?
          <textarea
            id="demo-goals"
            aria-label="What do you want the demo to cover?"
            required
            name="goals"
            rows={5}
            value={formState.goals}
            onChange={(event) => {
              setField('goals', event.target.value);
            }}
            className={fieldClassName}
            placeholder="Share the bottlenecks, outputs, or rollout questions you want to focus on."
          />
        </label>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Book a demo
          </button>
          <p className="max-w-xl text-sm leading-6 text-[var(--color-watchable-muted)]">
            Submitting opens your email client with a prefilled request to the Watchable team.
          </p>
        </div>

        {isSubmitted ? (
          <p className="rounded-2xl border border-[color:rgb(255_122_26_/_0.18)] bg-[color:rgb(255_122_26_/_0.08)] px-4 py-3 text-sm leading-6 text-[var(--color-watchable-ink)]">
            Your draft is ready. Send it to complete the booking request.
          </p>
        ) : null}
      </form>
    </section>
  );
};
