import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ShieldCheck, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  facing: z.string().min(1, "Please select what you are facing"),
  message: z.string().min(10, "Please describe your situation in more detail (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      facing: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Consultation Request Received", {
      description: "James Ryan will review your message and contact you directly within 24 hours.",
    });
    reset();
  };

  return (
    <div className="bg-card border border-white/5 rounded-sm p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Accent subtle background glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Request a Free Case Evaluation
        </h3>
        <p className="text-xs text-muted-foreground font-sans leading-relaxed">
          Fill out the form below to connect directly with James Ryan. Your consultation is completely confidential and free of charge.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Input
              placeholder="First Name"
              className="bg-background border-white/10 text-sm focus-visible:ring-primary rounded-none"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-[11px] text-destructive">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Input
              placeholder="Last Name"
              className="bg-background border-white/10 text-sm focus-visible:ring-primary rounded-none"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-[11px] text-destructive">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-background border-white/10 text-sm focus-visible:ring-primary rounded-none"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-[11px] text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-background border-white/10 text-sm focus-visible:ring-primary rounded-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[11px] text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <Select onValueChange={(val) => setValue("facing", val)}>
            <SelectTrigger className="bg-background border-white/10 text-sm text-muted-foreground focus-visible:ring-primary rounded-none">
              <SelectValue placeholder="What legal issue are you facing?" />
            </SelectTrigger>
            <SelectContent className="bg-card border-white/10 text-foreground">
              <SelectItem value="DUI Charge">DUI Charge</SelectItem>
              <SelectItem value="Criminal Charge">Criminal Charge</SelectItem>
              <SelectItem value="Traffic Violation">Traffic Violation</SelectItem>
              <SelectItem value="Other">Other / Not Listed</SelectItem>
            </SelectContent>
          </Select>
          {errors.facing && (
            <p className="text-[11px] text-destructive">{errors.facing.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Textarea
            placeholder="Describe what happened (Do not include extremely sensitive details)"
            rows={4}
            className="bg-background border-white/10 text-sm focus-visible:ring-primary rounded-none resize-none"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-[11px] text-destructive">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-none text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Case Details...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Request Free Evaluation</span>
            </>
          )}
        </Button>

        <div className="flex items-start gap-2 pt-2 text-[10px] text-muted-foreground leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            By submitting this form, you agree to be contacted by Ryan Law LLC by phone, text, or email. Your submission is fully protected under legal confidentiality rules, but does not form a binding attorney-client relationship.
          </p>
        </div>
      </form>
    </div>
  );
}
