const testimonials = [
  { name: "Marcus T.", text: "Got $750 off my USA vs Mexico group stage tickets, unreal" },
  { name: "Diego R.", text: "Knocked the price of two Final tickets way down, thank you" },
  { name: "Liam O.", text: "Booked MetLife semifinal seats with this, saved a fortune" },
  { name: "Jamal W.", text: "Took 4 minutes, code worked at checkout no issues" },
  { name: "Sofia M.", text: "Flying to Toronto for the opener and this covered a chunk of it" },
  { name: "Ethan K.", text: "My brother didn't believe me until I forwarded him the confirmation lol" },
  { name: "Andre P.", text: "Got Mexico City group tickets for me and my dad, huge W" },
  { name: "Carlos V.", text: "Used it on Round of 16 seats in LA, legit discount" },
  { name: "Noah B.", text: "Was about to pay full price, glad I saw this first" },
  { name: "Tyler J.", text: "Code dropped in my email same day, applied no problem" },
  { name: "Ricardo S.", text: "Saving for the Final with my buddies, this made it actually doable" },
  { name: "Kevin H.", text: "Houston quarterfinal tickets locked in, $750 off no joke" },
  { name: "Mateo F.", text: "Brazil vs Argentina if it happens, I'll be there because of this" },
  { name: "Owen D.", text: "Worked on FIFA's official resale, didn't think it would tbh" },
  { name: "Lucas A.", text: "Already telling the whole group chat about this" },
];


export const TestimonialBar = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="w-full overflow-hidden mt-8 py-5">
      <div className="flex animate-marquee">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="mx-3 flex-shrink-0 rounded-lg border border-border/60 bg-card px-4 py-3 shadow-sm"
          >
            <p className="text-sm text-foreground/80 whitespace-nowrap">"{t.text}"</p>
            <p className="text-xs font-semibold text-primary mt-1">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
