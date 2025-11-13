import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GiftCardHero } from "@/components/GiftCardHero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleClaimNow = () => {
    toast({
      title: "Ready to claim!",
      description: "This would redirect to the registration page.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-xl w-full py-8">
        <GiftCardHero />
        
        <div className="text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          <Badge className="mb-3 px-3 py-1 text-xs text-black">Limited Offer</Badge>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Get a <span className="text-primary">$100 Crumbl Cookies Gift</span><br />
            <span className="text-primary">Card</span> by giving feedback on<br />
            their new menu items.
          </h1>
        </div>

        <HowItWorks />

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Button 
            size="lg" 
            variant="hero" 
            className="w-full max-w-sm h-12 text-base rounded-full mb-3 text-black"
            onClick={handleClaimNow}
          >
            Claim Now
          </Button>
          
          <p className="text-sm text-muted-foreground mb-2">
            5 minutes • No purchase required
          </p>
        </div>

        <TrustBadges />
      </div>
    </div>
  );
};

export default Index;
