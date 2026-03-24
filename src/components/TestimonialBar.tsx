const testimonials = [
  { name: "Sarah M.", text: "Got my $750 gift card in just 3 days! 🎉" },
  { name: "Jessica L.", text: "So easy! Took me 5 minutes to qualify ✨" },
  { name: "Emily R.", text: "I was skeptical but it actually worked! 💕" },
  { name: "Amanda K.", text: "Best beauty deal I've ever found 🙌" },
  { name: "Rachel T.", text: "Already shopping at Sephora with mine! 💄" },
  { name: "Megan P.", text: "Told all my friends about this 🔥" },
];

export const TestimonialBar = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="w-full overflow-hidden mt-8 py-3 border-t border-border/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="mx-8 text-sm text-muted-foreground inline-flex items-center gap-2"
          >
            <span className="font-semibold text-foreground/80">{t.name}</span>
            <span>"{t.text}"</span>
          </span>
        ))}
      </div>
    </div>
  );
};
