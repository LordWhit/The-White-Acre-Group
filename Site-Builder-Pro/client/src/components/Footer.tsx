import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary-foreground/10 pb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/* Logo mark updated to "S" */}
              <div className="h-10 w-10 bg-white text-primary flex items-center justify-center font-serif font-bold text-2xl rounded-sm">
                S
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  White Acre Manufacturing
                </span>
                <span className="text-sm text-primary-foreground/70">
                  A White Acre Group Company
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              We acquire and operate established manufacturing businesses with a focus on long-term preservation, employee wellbeing, and sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/approach" className="hover:text-white transition-colors">Our Approach</Link></li>
              <li><Link href="/criteria" className="hover:text-white transition-colors">Investment Criteria</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Partners</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><Link href="/business-owners" className="hover:text-white transition-colors">For Business Owners</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investors & Capital</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>info@thewhiteacregroup.com</li>
            </ul>
          </div>
        </div>
       
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} White Acre Manufacturing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
