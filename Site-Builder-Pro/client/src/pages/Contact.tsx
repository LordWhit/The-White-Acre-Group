import { SectionHeader } from "@/components/SectionHeader";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-muted/10 flex flex-col items-center justify-center">
      <div className="container-padding text-center max-w-3xl">
        <SectionHeader 
          title="Get in Touch" 
          description="We welcome inquiries from business owners, intermediaries, and prospective investors. All conversations are held in strict confidence."
          className="mb-16"
        />

        <div className="flex flex-col items-center gap-4">
          <Mail className="h-6 w-6 text-accent" />
          <p className="text-lg md:text-xl text-primary">Email us at:</p>
          <a
            href="mailto:info@thewhiteacregroup.com"
            className="text-2xl md:text-3xl font-serif text-accent hover:text-primary transition-colors"
          >
            info@thewhiteacregroup.com
          </a>
        </div>
      </div>
    </div>
  );
}
