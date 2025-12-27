import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  centered = false,
  className,
  light = false
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mb-12", centered && "mx-auto text-center", className)}>
      {label && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-xs font-bold tracking-widest uppercase mb-3 block",
            light ? "text-primary-foreground/60" : "text-accent"
          )}
        >
          {label}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
