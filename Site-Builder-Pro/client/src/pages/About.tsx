import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-muted/30 py-20 border-b border-border/50">
        <div className="container-padding">
          <SectionHeader 
            label="About Us"
            title="Operators, Not Just Investors"
            description="We are hands-on operators who believe in the power of focus. Unlike traditional private equity firms that manage portfolios of dozens of companies, we dedicate our full attention to the stewardship of a select few exceptional businesses."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-primary">Our Philosophy</strong> is rooted in the belief that small businesses are the backbone of the economy. We don’t view these companies as financial instruments to be engineered and flipped, but as living communities of people serving real customer needs.
            </p>
            <p>
              We bring <strong className="text-primary">operational involvement</strong> alongside capital. That means real support where it matters—systems, process, leadership, and long-term decision-making—without imposing unnecessary complexity or stripping culture.
            </p>
            <p>
              <strong className="text-primary">Integrity and Transparency</strong> guide every interaction. We do what we say we will do. We believe trust is built through clarity, consistency, and follow-through—not clever structuring or hidden incentives.
            </p>
          </div>

          {/* Intentional Visual Space (No Fake Imagery) */}
          <div className="md:col-span-5">
            <div className="h-[400px] rounded-lg border border-border bg-muted/40 flex items-center justify-center text-center p-8">
              <p className="text-muted-foreground italic">
                We believe authenticity matters more than appearances.
                <br />
                This space will evolve as our story becomes public.
              </p>
            </div>

            <div className="mt-8 bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h4 className="font-serif text-xl font-bold mb-2 text-primary">
                Built with intention.
              </h4>
              <p className="text-sm text-primary/70">
                Focused ownership. Long-term thinking. Real partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Principles */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-padding">
          <SectionHeader 
            title="How We Lead"
            description="Our approach to leadership is defined by principles, not titles."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Owner Mentality",
                text: "We think and act like long-term owners, not financial engineers optimizing for an exit."
              },
              {
                title: "Operational Respect",
                text: "The people closest to the work usually have the best answers. We listen first."
              },
              {
                title: "Aligned Incentives",
                text: "We structure partnerships so everyone wins together—employees, sellers, and capital."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-muted/30"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
