import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern architecture looking up"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/90 to-primary/80" />

        <div className="container-padding relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/70 mb-6 border border-white/20 px-4 py-2 rounded-full"
          >
            Institutional Quality • Private Capital
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 text-white leading-[1.1]"
          >
            White Acre Manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-12 font-medium italic"
          >
            A White Acre Group Company
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            We acquire and operate established manufacturing businesses with a
            focus on long-term preservation, employee wellbeing, and sustainable
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/business-owners">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-serif text-lg h-14 px-8 min-w-[200px]"
              >
                Business Owners
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-serif text-lg h-14 px-8 min-w-[200px]"
              >
                Investors & Partners
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Preserving Legacy",
                description:
                  "We understand that your business is your life’s work. We honor the culture and reputation you’ve built over decades.",
              },
              {
                icon: Users,
                title: "People First",
                description:
                  "Employees are the heartbeat of any company. We commit to no mass layoffs and preserving the team that made the business successful.",
              },
              {
                icon: TrendingUp,
                title: "Long-Term Horizon",
                description:
                  "Unlike private equity firms with five-year clocks, we hold indefinitely and make decisions for the next generation.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section-padding bg-muted/30 border-y border-border/50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="What We Look For"
                title="Durable Businesses Built on Real Work"
                description="We focus on companies with substance — businesses that have stood the test of time, serve real customers, and are run by people who care about what they’ve built."
              />

              <ul className="space-y-4 mb-8">
                {[
                  "Proven operations with real customers and repeat demand",
                  "A long operating history that reflects resilience, not hype",
                  "Strong cash flow, even if the books aren’t perfectly polished",
                  "Simple, understandable businesses with low dependency risk",
                  "Owners who care deeply about their people and legacy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg text-primary/80"
                  >
                    <div className="mt-2 h-2 w-2 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-6">
                We are less concerned with financial engineering and more focused
                on whether a business truly works — operationally, culturally,
                and economically. Every situation is different, and we are open
                to creative, fair structures that align incentives and protect
                what matters.
              </p>

              <Link href="/criteria">
                <Button
                  variant="link"
                  className="p-0 text-primary font-semibold text-lg hover:text-accent transition-colors group"
                >
                  View Full Criteria{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-padding max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to discuss the next chapter?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Whether you are an owner considering a transition or an investor
            seeking stable returns, let’s start a confidential conversation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-serif text-lg h-14 px-10"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
