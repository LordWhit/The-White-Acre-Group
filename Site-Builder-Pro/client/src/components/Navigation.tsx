import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/criteria", label: "Criteria" },
  { href: "/approach", label: "Approach" },
  { href: "/business-owners", label: "For Owners" },
  { href: "/investors", label: "Investors" },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-start gap-0">
          {/* Logo Mark */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-primary text-white flex items-center justify-center font-serif font-bold text-2xl rounded-sm">
              W
            </div>
            <div>
              <span className={cn(
                "font-serif text-2xl font-bold tracking-tight transition-colors",
                scrolled ? "text-primary" : "text-primary"
              )}>
                White Acre Manufacturing
              </span>
              <p className="text-xs text-muted-foreground -mt-1">
                A White Acre Group Company
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                location === link.href
                  ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button
              className="font-serif ml-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-12">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-serif font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-primary font-serif text-lg py-6">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
