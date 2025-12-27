import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ForOwners() {
  return (
    <div className="pt-24 pb-16">
      <section className="container-padding py-20">
        <div className="max-w-4xl">
          <SectionHeader 
            label="For Business Owners"
            title="Not Just Another Buyer"
            description="We are not a brokerage, and we are not a traditional private equity firm. We are direct buyers looking for a permanent home for your business."
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Why Owners Choose Us</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Confidentiality Guaranteed",
                  desc: "We understand that rumors can hurt your business. We operate with strict confidentiality until you are ready to announce."
                },
                {
                  title: "Certainty of Closing",
                  desc: "We invest our own capital and have committed backing. When we sign an LOI, we have the funds to close. We don't shop your deal around."
                },
                {
                  title: "Legacy Preservation",
                  desc: "We don't buy to slash costs and flip. We buy to build. Your brand, your team, and your reputation will remain intact."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl bg-muted">
             {/* Owners shaking hands */}
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop" 
              alt="Two professionals shaking hands"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 border-y border-border">
        <div className="container-padding text-center">
          <SectionHeader 
            title="Is it the right time?" 
            description="Many owners wait too long to plan their exit. The best time to sell is when the business is performing well and you have the energy to support a transition."
            centered
          />
          <Link href="/contact">
            <Button size="lg" className="mt-8 bg-primary font-serif text-lg h-14 px-10">
              Start a Confidential Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
