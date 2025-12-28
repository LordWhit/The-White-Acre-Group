import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertContactMessage } from "@shared/routes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail } from "lucide-react";

export default function Contact() {
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(data: InsertContactMessage) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-muted/10">
      <div className="container-padding py-12">
        <SectionHeader 
          title="Get in Touch" 
          description="We welcome inquiries from business owners, intermediaries, and prospective investors. All conversations are held in strict confidence."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">info@thewhiteacregroup.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your inquiry..." 
                            className="min-h-[150px] resize-none p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-serif bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
