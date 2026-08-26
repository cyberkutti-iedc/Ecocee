"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", businessType: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 mb-4 font-medium">
            Get Started
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tell Us What You're
            <br />
            <span className="text-primary">Trying To Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tell us about your business problem. We&apos;ll help determine whether AI, edge computing, embedded systems or automation can solve it. No commitment.
          </p>
        </div>

        {/* Quick contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl">
          <a href="mailto:info@ecocee.in" className="group">
            <Card className="bg-card border border-border hover:border-primary/30 transition-all cursor-pointer h-full">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground truncate">info@ecocee.in</p>
                </div>
              </CardContent>
            </Card>
          </a>
          <Card className="bg-card border border-border">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="text-xs text-muted-foreground truncate">Kodungallur, Kerala, India</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="bg-card border border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold">
                  {submitted ? "Message Sent!" : "Send Us a Message"}
                </CardTitle>
                {submitted && (
                  <p className="text-sm text-primary">Thanks! We&apos;ll get back to you within 24 hours.</p>
                )}
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-6 text-center">
                    <p className="text-sm text-muted-foreground">Your message has been received. We&apos;ll respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name *</label>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>                        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">What do you need?</label>
                      <Select value={formData.businessType} onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-business-automation">AI Business Automation</SelectItem>
                          <SelectItem value="ai-agent">AI Agent</SelectItem>
                          <SelectItem value="private-ai">Private AI / On-Premise AI</SelectItem>
                          <SelectItem value="edge-ai">Edge AI</SelectItem>
                          <SelectItem value="computer-vision">Computer Vision</SelectItem>
                          <SelectItem value="iot-embedded">IoT / Embedded System</SelectItem>
                          <SelectItem value="custom-hardware">Custom Hardware</SelectItem>
                          <SelectItem value="pcb-prototyping">PCB Prototyping</SelectItem>
                          <SelectItem value="ai-hardware">AI + Hardware</SelectItem>
                          <SelectItem value="other">Something Else</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Tell us about your project *</label>
                      <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Briefly describe your business and what you'd like to automate or build..." required rows={4} />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-semibold h-11 group">
                      {isSubmitting ? "Sending..." : (
                        <span className="flex items-center">
                          Talk to an Ecocee Architect
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <Card className="bg-card border border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respond within <strong className="text-foreground">2 business hours</strong> during working days.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">30-Minute Discovery Call</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Book a call to discuss your project. No commitment.
                </p>
                <Button
                  variant="outline"
                  className="w-full text-sm"
                  asChild
                >
                  <a href="mailto:info@ecocee.in?subject=Discovery%20Call%20Request">
                    Request via Email
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Location</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Kodungallur, Kerala, India
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Built in Kerala. Serving businesses worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
