import { memo } from "react";

const items = ["{count} claimed today", "No purchase needed", "Takes only 5 minutes"];

export const TopBar = memo(({ count }: { count: number }) => {
  const doubled = [...items, ...items].map((t) => t.replace("{count}", String(count)));

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground overflow-hidden">
      <div className="flex animate-marquee-fast whitespace-nowrap py-1.5">
        {doubled.map((text, i) => (
          <span key={i} className="mx-8 text-xs font-medium tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
});

TopBar.displayName = "TopBar";
