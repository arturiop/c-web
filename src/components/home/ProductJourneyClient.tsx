'use client';

import Image from 'next/image';
import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { productJourneyStages } from '@/content/home';

export const ProductJourneyClient = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimeoutReference = useRef<number | null>(null);

  const advanceStage = useEffectEvent(() => {
    setActiveStage((currentStage) => (currentStage + 1) % productJourneyStages.length);
  });

  useEffect(() => {
    if (!isAutoPlaying) {
      return;
    }

    const interval = window.setInterval(() => {
      advanceStage();
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, [advanceStage, isAutoPlaying]);

  useEffect(
    () => () => {
      if (resumeTimeoutReference.current) {
        window.clearTimeout(resumeTimeoutReference.current);
      }
    },
    [],
  );

  const handleStageClick = (index: number) => {
    setActiveStage(index);
    setIsAutoPlaying(false);

    if (resumeTimeoutReference.current) {
      window.clearTimeout(resumeTimeoutReference.current);
    }

    resumeTimeoutReference.current = window.setTimeout(() => {
      setIsAutoPlaying(true);
      resumeTimeoutReference.current = null;
    }, 8000);
  };

  const currentStage = productJourneyStages[activeStage];

  return (
    <article className="watchable-panel overflow-hidden rounded-[30px]">
      <div className="flex flex-wrap gap-4 px-7 pt-5 pb-6">
        {productJourneyStages.map((stage, index) => {
          const isActive = index === activeStage;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => {
                handleStageClick(index);
              }}
              className={`inline-flex items-center gap-3 rounded-full px-6 py-4 text-left text-[18px] transition ${isActive ? 'bg-[var(--color-watchable-accent)] text-white shadow-[0_14px_30px_rgba(255,122,26,0.28)]' : 'bg-[#f3f0ec] text-[var(--color-watchable-muted)] hover:text-[var(--color-watchable-ink)]'}`}
              aria-pressed={isActive}
            >
              <span>{stage.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex min-h-[500px] items-center justify-center px-8 pt-2 pb-6">
        {currentStage.id === 'product' ? (
          <div className="relative flex h-full w-full items-center justify-center rounded-[26px] bg-[radial-gradient(circle_at_center,rgba(255,251,245,0.94),rgba(255,255,255,0.65))]">
            <div className="absolute top-[12%] rounded-[20px] border border-[#ffc8a5] bg-[rgba(255,246,239,0.88)] px-6 py-5 text-[1.15rem] leading-10 text-[var(--color-watchable-ink)] shadow-[0_18px_30px_rgba(255,122,26,0.08)]">
              &quot;{currentStage.prompt}&quot;
            </div>

            <Image
              src={currentStage.imageSrc}
              alt={currentStage.imageAlt}
              width={824}
              height={824}
              className="h-[250px] w-auto object-contain drop-shadow-[0_20px_28px_rgba(101,89,59,0.22)] sm:h-[330px]"
            />
          </div>
        ) : null}

        {currentStage.id === 'storyboard' ? (
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={currentStage.imageSrc}
              alt={currentStage.imageAlt}
              width={1600}
              height={1600}
              className="h-full max-h-[420px] w-full rounded-[20px] object-contain"
            />
          </div>
        ) : null}

        {currentStage.id === 'video' ? (
          <div className="relative">
            <div className="w-52 overflow-hidden rounded-t-[1.5rem] rounded-b-none border-2 border-[var(--color-watchable-line)] bg-white shadow-xl sm:w-60">
              <video
                aria-label={currentStage.videoLabel}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[9/16] w-full rounded-t-[1.35rem] rounded-b-none object-cover"
              >
                <source src={currentStage.videoSrc} type="video/mp4" />
              </video>
              <div className="bg-[rgba(16,17,20,0.88)] px-4 py-4 text-white">
                <p className="text-xs font-medium">Your creative preview is ready</p>
                <p className="mt-1 text-[10px] text-white/70">Prepared for short-form testing</p>
              </div>
            </div>
            <div className="absolute top-8 -left-16 rounded-xl border border-[var(--color-watchable-line)] bg-white px-3 py-2 text-xs shadow-lg sm:-left-24">
              <p className="text-[10px] text-[var(--color-watchable-muted)]">Format</p>
              <p className="font-semibold text-[var(--color-watchable-ink)]">9:16 Reel</p>
            </div>
            <div className="absolute -right-16 bottom-12 rounded-xl border border-[var(--color-watchable-line)] bg-white px-3 py-2 text-xs shadow-lg sm:-right-24">
              <p className="text-[10px] text-[var(--color-watchable-muted)]">Ready for</p>
              <p className="font-semibold text-[var(--color-watchable-ink)]">TikTok · IG · YT</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-t border-[var(--color-watchable-line)] bg-[rgba(255,255,255,0.7)] px-7 py-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--color-watchable-ink)]">
              {currentStage.label}
            </p>
            <p className="text-[15px] text-[var(--color-watchable-muted)]">
              {currentStage.sublabel}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {productJourneyStages.map((stage, index) => (
              <span
                key={stage.id}
                className={`rounded-full ${index === activeStage ? 'h-3 w-10 bg-[var(--color-watchable-accent)]' : 'h-2.5 w-2.5 bg-[#dcdde2]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
