import { SectionHeader } from "@/components/SectionHeader";
import { Handshake, Clock, Search, Scale } from "lucide-react";

export default function Approach() {
  const steps = [
    {
      icon: Search,
      title: "1. Initial Discovery",
      description: "We start with a confidential conversation to understand your goals, the business history, and whether there is a mutual fit. We sign an NDA immediately to protect your privacy."
    },
    {
      icon: Scale,
      title: "2. Valuation & Offer",
      description: "We quickly analyze the financials and operations. Within weeks, we provide a clear Letter of Intent (LOI) with valuation and deal structure. No games, no re-trading."
    },
    {
      icon: Clock,
      title: "3. Due Diligence",
      description: "We verify the information provided. We focus on confirming the quality of earnings and understanding the key risks. We move efficiently to minimize disruption."
    },
    {
      icon: Handshake,
      title: "4. Closing & Transition",
      description: "We close the transaction and begin a carefully planned transition period. We work with you to communicate the change to employees and customers at the right time."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="bg-muted/30 py-20 border-b border-border/50">
        <div className="container-padding">
          <SectionHeader 
            label="Our Process"
            title="A Human Approach to Dealmaking"
            description="Selling a business is personal. We tailor our approach to meet the specific needs of each owner, ensuring a smooth transition that protects your legacy."
          />
        </div>
      </section>

      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 relative">
              {i !== steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-[-64px] w-px bg-border hidden md:block" />
              )}
              <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg shadow-primary/20">
                <step.icon className="h-6 w-6" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-padding text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Flexible Deal Structures</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We don't have a "one size fits all" model. We can structure deals with all cash at closing, seller financing notes, or retained equity if you want to participate in future upside. We solve for tax efficiency and your personal goals.
          </p>
        </div>
      </section>
    </div>
  );
}
