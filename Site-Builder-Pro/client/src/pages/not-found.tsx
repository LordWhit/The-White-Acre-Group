import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-primary">Page Not Found</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button size="lg" className="w-full font-serif text-lg h-12 bg-primary">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
