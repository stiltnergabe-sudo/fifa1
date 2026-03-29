import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GiftCardHero } from "@/components/GiftCardHero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialBar } from "@/components/TestimonialBar";
import { TopBar } from "@/components/TopBar";


const Index = () => {
  const [claimCount, setClaimCount] = useState(2051);

  const handleClaimNow = useCallback(() => {
    setClaimCount((c) => c + 1);
    window.location.href = "https://trksy.org/aff_c?offer_id=1185&aff_id=152053&source=epc";
  }, []);

  return (
    <>
      <TopBar count={claimCount} />
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-10">
        <div className="max-w-xl w-full py-8">
          <GiftCardHero />
          
          <div className="text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <Badge className="mb-3 px-3 py-1 text-xs text-primary-foreground">Limited Offer</Badge>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight whitespace-normal">
              <span className="inline-block whitespace-nowrap">Get a <span className="text-primary">$750 Sephora Gift</span></span><br />
              <span className="inline-block whitespace-nowrap"><span className="text-primary">Card</span> by giving feedback on</span><br />
              <span className="inline-block whitespace-nowrap">their products.</span>
            </h1>
          </div>

          <HowItWorks />

          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button 
              size="lg" 
              variant="hero" 
              className="w-full max-w-sm h-14 text-lg rounded-full mb-3 text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300"
              onClick={handleClaimNow}
            >
              🎁 Claim Now
            </Button>
            
            <p className="text-sm text-muted-foreground mb-1">
              Only 47 left today
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              5 minutes • No purchase required
            </p>
          </div>

          <TrustBadges />
          <TestimonialBar />
        </div>
      </div>
    </>
  );
};

export default Index;
