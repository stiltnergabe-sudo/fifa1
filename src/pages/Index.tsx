import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GiftCardHero } from "@/components/GiftCardHero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialBar } from "@/components/TestimonialBar";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  const [claimCount] = useState(1349);

  const handleClaimNow = useCallback(() => {
    window.location.href = "https://trksy.org/aff_c?offer_id=1185&aff_id=152053&source=epc";
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-xl w-full py-8">
          <GiftCardHero />

          <div className="text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <Badge className="mb-3 px-3 py-1 text-xs text-primary-foreground">Limited Offer</Badge>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight whitespace-normal">
              <span className="inline-block whitespace-nowrap">Get <span className="text-primary">$750 off</span> your FIFA</span><br />
              <span className="inline-block whitespace-nowrap">2026 World Cup tickets by</span><br />
              <span className="inline-block whitespace-nowrap">giving feedback.</span>
            </h1>

            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full border border-border/60 bg-card/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground tabular-nums">{claimCount.toLocaleString()}</span> given out today
              </p>
            </div>
          </div>

          <CountdownTimer />

          <HowItWorks />

          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button
              size="lg"
              variant="hero"
              className="w-full max-w-sm h-14 text-lg rounded-full mb-3 text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300"
              onClick={handleClaimNow}
            >
              🎟️ Claim Now
            </Button>

            <p className="text-sm text-muted-foreground mb-1">
              Only 47 left today
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              5 minutes • No purchase required
            </p>
          </div>

          <TrustBadges />

          <div className="my-10 flex items-center gap-4 max-w-md mx-auto">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">What people are saying</span>
            <div className="h-px flex-1 bg-border/60" />
          </div>
          <TestimonialBar />
        </div>
      </div>
    </>
  );
};

export default Index;
