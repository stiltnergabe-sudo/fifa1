const rows = [
  { offers: "1–3", reward: "1 fragrance coupon" },
  { offers: "3–5", reward: "2 fragrance coupons" },
  { offers: "5–10", reward: "VIP fragrance rewards" },
];

export const RewardsTable = () => {
  return (
    <section className="mt-10 px-2">
      <p className="text-center text-foreground/90 text-sm sm:text-base mb-5 max-w-md mx-auto">
        Complete available offers to unlock additional fragrance discounts and coupon rewards.
      </p>
      <div className="max-w-md mx-auto rounded-xl border border-border/60 bg-card overflow-hidden">
        <div className="grid grid-cols-2 px-5 py-3 border-b border-border/60">
          <span className="font-bold text-foreground text-sm">Completed Offers</span>
          <span className="font-bold text-foreground text-sm">Reward</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.offers}
            className={`grid grid-cols-2 px-5 py-4 ${i < rows.length - 1 ? "border-b border-border/40" : ""}`}
          >
            <span className="text-foreground/90 text-sm">{r.offers}</span>
            <span className="text-foreground/90 text-sm">{r.reward}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
