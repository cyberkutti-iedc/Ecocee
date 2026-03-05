"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", organization: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">07</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Have questions about our AI and edge computing solutions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Email
              </h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@ecocee.in" className="text-primary hover:underline">
                  info@ecocee.in
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                For general inquiries and support
              </p>
            </div>

            <Separator />

            {/* Location */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Location
              </h3>
              <p className="text-sm text-muted-foreground">
                Kerala, India
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                AI and Edge Computing Research Hub
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-base font-semibold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Organization
                    </label>
                    <Input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className="w-full"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-semibold h-11 rounded-sm transition-colors duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 p-6 border-l-4 border-primary bg-secondary/20 rounded">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Response Time:</span> We aim to respond 
            to all inquiries within 2 business days. For urgent matters, please use the subject line 
            "URGENT:" and include specific context.
          </p>
        </div>
      </div>
    </section>
  );
};
