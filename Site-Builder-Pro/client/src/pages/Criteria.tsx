import { SectionHeader } from "@/components/SectionHeader";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Criteria() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-padding">
          <SectionHeader 
            light
            label="Investment Focus"
            title="What We Look For"
            description="We seek established, profitable businesses in durable industries. We avoid startups, turnarounds, and high-tech companies with binary outcomes."
          />
        </div>
      </section>

      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary border-b border-border pb-4">Financial Profile</h3>
            <ul className="space-y-4">
              {[
                { label: "EBITDA", value: "$1.5M to $5M" },
                { label: "Revenue", value: "$5M to $30M" },
                { label: "Margins", value: "15%+ EBITDA Margins" },
                { label: "History", value: "10+ Years of profitable operations" },
                { label: "Trend", value: "Stable or growing revenue history" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="font-medium text-primary">{item.label}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary border-b border-border pb-4">Business Characteristics</h3>
            <ul className="space-y-4">
              {[
                "Low customer concentration (no customer > 15%)",
                "Non-cyclical / Recession resistant demand",
                "High recurring revenue or repeat customers",
                "Low capital expenditure requirements",
                "Strong middle management layer in place"
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

        <div className="mb-20">
          <SectionHeader title="Preferred Industries" centered className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Industrial Manufacturing",
              "B2B Services",
              "Specialty Distribution",
              "Building Products",
              "HVAC & Plumbing",
              "Facilities Management",
              "Packaging",
              "Transportation & Logistics"
            ].map((industry, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-md transition-shadow bg-muted/20 border-border/60">
                <span className="font-medium text-primary">{industry}</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-destructive/5 rounded-2xl p-8 md:p-12 border border-destructive/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center text-primary">What We Avoid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Startups or Venture Capital",
                "Turnarounds / Distressed Assets",
                "Real Estate or Commodities",
                "Retail / Restaurants",
                "High Tech / Bio-Tech",
                "Project-based revenue with no recurring aspect"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
