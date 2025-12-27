import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary-foreground/10 pb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-white text-primary flex items-center justify-center font-serif font-bold text-xl rounded-sm">
                A
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Acquire & Steward
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Honoring legacy through disciplined acquisition and long-term stewardship of established businesses.
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
              <li>inquiries@acquireandsteward.com</li>
              <li>(555) 123-4567</li>
              <li>
                123 Financial District Blvd<br />
                Suite 400<br />
                New York, NY 10005
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Acquire & Steward Partners. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
