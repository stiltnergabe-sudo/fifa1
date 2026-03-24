const testimonials = [
  { name: "Sarah M.", text: "Got my $750 gift card in just 3 days!" },
  { name: "Jessica L.", text: "So easy, took me like 5 minutes to sign up" },
  { name: "Emily R.", text: "I was honestly skeptical but it actually came through" },
  { name: "Amanda K.", text: "Best beauty deal I've found this year" },
  { name: "Rachel T.", text: "Already used mine at Sephora, got the Dyson Airwrap!" },
  { name: "Megan P.", text: "Told my roommate and she got hers too lol" },
  { name: "Brittany S.", text: "Thought it was fake but nope, legit gift card" },
  { name: "Lauren W.", text: "Finally stocked up on all my skincare favorites" },
  { name: "Olivia H.", text: "The whole process was super straightforward honestly" },
  { name: "Taylor D.", text: "Used it on perfume and still had money left over" },
  { name: "Kayla N.", text: "My friend sent me this and I'm so glad she did" },
  { name: "Ashley B.", text: "Just got the email with my gift card code 🙌" },
  { name: "Samantha G.", text: "Went on a full Sephora haul with this, no regrets" },
  { name: "Nicole F.", text: "Took about a week but totally worth the wait" },
  { name: "Christina J.", text: "I keep telling people about this and nobody believes me until they try" },
];

export const TestimonialBar = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="w-full overflow-hidden mt-8 py-4 border-t border-b border-border/40 bg-muted/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="mx-6 text-sm inline-flex items-center gap-1.5"
          >
            <span className="font-semibold text-foreground">{t.name}</span>
            <span className="text-muted-foreground">—</span>
            <span className="text-foreground/70">"{t.text}"</span>
          </span>
        ))}
      </div>
    </div>
  );
};
