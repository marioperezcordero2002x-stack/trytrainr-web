/** Static mockups: daily training + nutrition guidance — not a social feed. */

export function GuidanceShowcaseTraining({ dense }: { dense?: boolean }) {
  const t = dense
    ? {
        pad: "px-2.5 pb-6 pt-0.5",
        title: "text-[11px] sm:text-[12px]",
        chip: "text-[8px] sm:text-[9px]",
        h: "text-[12px] sm:text-[13px]",
        body: "text-[10px] sm:text-[11px]",
        row: "text-[9px] sm:text-[10px]",
      }
    : {
        pad: "px-3 pb-10 pt-1 sm:px-3.5 sm:pb-11",
        title: "text-[12px] sm:text-[14px]",
        chip: "text-[9px] sm:text-[10px]",
        h: "text-[13px] sm:text-[15px]",
        body: "text-[11px] sm:text-[12px]",
        row: "text-[10px] sm:text-[11px]",
      };

  return (
    <div className={`space-y-3 ${t.pad}`}>
      <div className="flex items-center justify-between px-0.5">
        <span className={`font-semibold text-white ${t.title}`}>Train</span>
        <span
          className={`rounded-md bg-[var(--trainr-accent-soft)] font-bold uppercase tracking-wide text-trainr-accent ${t.chip}`}
        >
          Today
        </span>
      </div>

      <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3 ring-1 ring-white/[0.04] sm:p-3.5">
        <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-trainr-accent sm:text-[10px]`}>
          Training Coach
        </p>
        <p className={`mt-1.5 font-bold leading-tight text-zinc-100 ${t.h}`}>
          Pull · back emphasis
        </p>
        <p className={`mt-2 leading-relaxed text-zinc-400 ${t.body}`}>
          Pull-ups, rows, arms. Hold RPE 7–8; if you are tight, drop a rep and
          lock technique.
        </p>
        <div className="mt-3 space-y-1.5 border-t border-[var(--tr-border)] pt-3">
          <div className={`flex items-center justify-between text-zinc-500 ${t.row}`}>
            <span>Assisted pull-ups</span>
            <span className="font-semibold text-zinc-300">4×8</span>
          </div>
          <div className={`flex items-center justify-between text-zinc-500 ${t.row}`}>
            <span>Barbell row</span>
            <span className="font-semibold text-zinc-300">3×10</span>
          </div>
          <div className={`flex items-center justify-between text-zinc-500 ${t.row}`}>
            <span>Hammer curl</span>
            <span className="font-semibold text-zinc-300">3×12</span>
          </div>
        </div>
      </div>

      <div className="rounded-[var(--tr-radius-sm)] border border-dashed border-[var(--tr-border-medium)] bg-black/30 px-3 py-2 text-center">
        <p className={`font-medium text-zinc-400 ${dense ? "text-[9px]" : "text-[10px]"}`}>
          Today&apos;s call · no guessing under load
        </p>
      </div>
    </div>
  );
}

export function GuidanceShowcaseNutrition({ dense }: { dense?: boolean }) {
  const t = dense
    ? {
        pad: "px-2.5 pb-6 pt-0.5",
        title: "text-[11px] sm:text-[12px]",
        chip: "text-[8px] sm:text-[9px]",
        h: "text-[12px] sm:text-[13px]",
        body: "text-[10px] sm:text-[11px]",
        li: "text-[9px] sm:text-[10px]",
      }
    : {
        pad: "px-3 pb-10 pt-1 sm:px-3.5 sm:pb-11",
        title: "text-[12px] sm:text-[14px]",
        chip: "text-[9px] sm:text-[10px]",
        h: "text-[13px] sm:text-[15px]",
        body: "text-[11px] sm:text-[12px]",
        li: "text-[10px] sm:text-[11px]",
      };

  return (
    <div className={`space-y-3 ${t.pad}`}>
      <div className="flex items-center justify-between px-0.5">
        <span className={`font-semibold text-white ${t.title}`}>Fuel</span>
        <span
          className={`rounded-md border border-[var(--tr-border-medium)] font-bold uppercase tracking-wide text-zinc-400 ${t.chip}`}
        >
          Today
        </span>
      </div>

      <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3 ring-1 ring-white/[0.04] sm:p-3.5">
        <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-trainr-accent sm:text-[10px]`}>
          Nutrition Coach
        </p>
        <p className={`mt-1.5 font-bold leading-tight text-zinc-100 ${t.h}`}>
          Eating for a hard pull day
        </p>
        <p className={`mt-2 leading-relaxed text-zinc-400 ${t.body}`}>
          Hydration and carbs around training; dinner with complete protein —
          fewer extra decisions.
        </p>
        <ul className={`mt-3 space-y-1.5 border-t border-[var(--tr-border)] pt-3 text-zinc-500 ${t.li}`}>
          <li className="flex gap-2">
            <span className="text-trainr-accent">·</span>
            <span>Steady breakfast; do not skip protein</span>
          </li>
          <li className="flex gap-2">
            <span className="text-trainr-accent">·</span>
            <span>Post-workout: simple, clear meal</span>
          </li>
          <li className="flex gap-2">
            <span className="text-trainr-accent">·</span>
            <span>Lighter dinner if the day was heavy</span>
          </li>
        </ul>
      </div>

      <div className="rounded-[var(--tr-radius-sm)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)]/80 px-3 py-2 text-center ring-1 ring-white/[0.03]">
        <p className={`text-zinc-500 ${dense ? "text-[9px]" : "text-[10px]"}`}>
          Guidance, not a spreadsheet
        </p>
      </div>
    </div>
  );
}

export function GuidanceShowcaseSystem({ dense }: { dense?: boolean }) {
  const small = dense ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[11px]";
  const label = dense ? "text-[8px]" : "text-[9px]";

  return (
    <div
      className={`flex flex-col justify-center space-y-3 px-2.5 pb-7 pt-1 sm:px-3 ${dense ? "min-h-[240px] pb-6 sm:min-h-[252px]" : "min-h-[280px] sm:min-h-[300px]"}`}
    >
      <p className="text-center font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
        In sync
      </p>
      <div className="space-y-2 rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3 ring-1 ring-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-trainr-accent shadow-[0_0_8px_rgba(255,122,0,0.5)]" />
          <p className={`font-semibold text-zinc-200 ${small}`}>Training Coach</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-trainr-accent/85 shadow-[0_0_6px_rgba(255,122,0,0.35)]" />
          <p className={`font-semibold text-zinc-200 ${small}`}>Nutrition Coach</p>
        </div>
        <div className="my-1 h-px w-full bg-[var(--tr-border)]" />
        <p className={`leading-snug text-zinc-400 ${label}`}>
          Same daily context · less friction between training and food
        </p>
      </div>
      <p className={`text-center font-medium text-zinc-500 ${label}`}>
        One system. Better execution.
      </p>
    </div>
  );
}
