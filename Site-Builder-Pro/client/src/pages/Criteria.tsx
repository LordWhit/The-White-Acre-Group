import { SectionHeader } from "@/components/SectionHeader";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Criteria() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-padding">
          <SectionHeader
            light
            label="Investment Focus"
            title="How We Evaluate Businesses"
            description="We look for real companies doing real work — businesses that have proven themselves over time, serve essential needs, and are built to last beyond their current owner."
          />
        </div>
      </section>

      {/* Core Criteria */}
      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Financial Reality */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary border-b border-border pb-4">
              Financial Reality
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: "Cash Flow",
                  value:
                    "Consistent, durable cash flow that supports the business and its people",
                },
                {
                  label: "Size Range",
                  value:
                    "Typically $1.5M–$5M of EBITDA, though flexibility exists for the right situation",
                },
                {
                  label: "Revenue",
                  value: "$5M–$30M in annual revenue",
                },
                {
                  label: "History",
                  value:
                    "A long operating history that reflects resilience, not perfection",
                },
                {
                  label: "Financials",
                  value:
                    "Clean enough to understand — not necessarily institutional-grade",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-start gap-6 py-2 border-b border-border/50 last:border-0"
                >
                  <span className="font-medium text-primary">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground text-right">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Substance */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary border-b border-border pb-4">
              Business Substance
            </h3>
            <ul className="space-y-4">
              {[
                "Provides essential products or services with repeat demand",
                "Straightforward business model that can be clearly understood",
                "Low dependence on any single customer, supplier, or individual",
                "Reasonable capital requirements relative to cash generation",
                "Employees and management who materially contribute to success",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <SectionHeader
            title="Industries We Know and Respect"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Industrial & Specialty Manufacturing",
              "Machining",
              "Metal Fabrication",
            ].map((industry, i) => (
              <Card
                key={i}
                className="p-6 text-center hover:shadow-md transition-shadow bg-muted/20 border-border/60"
              >
                <span className="font-medium text-primary">
                  {industry}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Avoid */}
        <div className="bg-destructive/5 rounded-2xl p-8 md:p-12 border border-destructive/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center text-primary">
              What We Intentionally Avoid
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Venture-backed or pre-profit businesses",
                "Financially engineered turnarounds",
                "Highly speculative or binary-outcome industries",
                "Retail, restaurants, or consumer trend-driven models",
                "Businesses dependent on constant refinancing or SBA leverage",
                "Pure project-based work with no customer continuity",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Philosophy */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Above all, we care about whether a business truly works — for its
            customers, its employees, and its owner. Every situation is unique,
            and we are open to thoughtful, creative structures that reflect
            reality rather than forcing a deal into a predefined box.
          </p>
        </div>
      </section>
    </div>
  );
}
