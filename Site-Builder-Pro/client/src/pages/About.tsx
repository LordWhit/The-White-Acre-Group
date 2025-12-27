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
              <strong className="text-primary">Our Philosophy</strong> is rooted in the belief that small businesses are the backbone of the economy. We don't view these companies as financial instruments to be engineered and flipped, but as living communities of people serving real customer needs.
            </p>
            <p>
              We bring <strong className="text-primary">operational expertise</strong> alongside capital. Our team has experience running operations, implementing modern systems, and driving sustainable growth without sacrificing culture. We are prepared to step into leadership roles or support existing management teams, depending on the needs of the business.
            </p>
            <p>
              <strong className="text-primary">Integrity and Transparency</strong> guide every interaction. We do what we say we will do. We treat sellers, employees, and partners with the respect they deserve. In an industry often characterized by sharp elbows, we pride ourselves on being fair, straightforward partners.
            </p>
          </div>
          <div className="md:col-span-5">
             {/* Professional meeting or office setting */}
            <div className="bg-muted h-[400px] rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            <div className="mt-8 bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h4 className="font-serif text-xl font-bold mb-2 text-primary">"The only way to do great work is to love what you do."</h4>
              <p className="text-sm text-primary/70">— We love building and growing great American businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-padding">
          <SectionHeader 
            title="Leadership" 
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="h-32 w-32 bg-muted rounded-full shrink-0 overflow-hidden border-2 border-primary/10">
                   {/* Placeholder for executive headshot */}
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : '1500648767791-00dcc994a43e'}?q=80&w=300&h=300&fit=crop`}
                    alt="Partner Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-1">
                    {i === 1 ? "James Anderson" : "Michael Sterling"}
                  </h3>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Managing Partner</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {i === 1 
                      ? "Former COO of a $50M manufacturing company with 15 years of operational experience. MBA from Harvard Business School." 
                      : "Investment banking background at Goldman Sachs focusing on industrial M&A. Deep experience in deal structuring and finance."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
