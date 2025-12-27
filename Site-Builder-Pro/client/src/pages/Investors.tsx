import { SectionHeader } from "@/components/SectionHeader";
import { PieChart, TrendingUp, Lock } from "lucide-react";

export default function Investors() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-padding">
          <SectionHeader 
            light
            label="For Investors"
            title="Disciplined Capital Deployment"
            description="We offer investors access to direct private equity deals with lower fees, better transparency, and longer time horizons than traditional funds."
          />
        </div>
      </section>

      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Lock,
              title: "Downside Protection",
              desc: "We buy assets with tangible value, recurring revenue, and long histories of profitability. Capital preservation is our first priority."
            },
            {
              icon: TrendingUp,
              title: "Operational Upside",
              desc: "We don't rely on financial engineering. We create value through operational improvements, modernization, and organic growth."
            },
            {
              icon: PieChart,
              title: "Direct Alignment",
              desc: "We invest significant personal capital in every deal. We only make money when our investors make money."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border border-border rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-muted/30 p-10 rounded-2xl border border-border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Our Investment Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We believe the lower middle market offers the most attractive risk-adjusted returns available today. Inefficiencies in this market allow disciplined buyers to acquire high-quality cash flows at reasonable multiples.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike funds that are forced to sell winners to return capital within a fixed timeframe, our permanent capital structure allows us to compound wealth tax-efficiently over decades.
          </p>
        </div>
      </section>
    </div>
  );
}
