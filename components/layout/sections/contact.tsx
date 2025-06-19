"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const mailToLink = `mailto:info@ecocee.in?subject=${subject}&body=Hello, I am ${firstName} ${lastName}. My email is ${email}.%0D%0A${message}`;
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Panel */}
        <div className="flex flex-col justify-center h-full">
          <div className="mb-6">
            <h2 className="text-lg text-blue-700 font-semibold mb-2 tracking-wider uppercase">Contact</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
              Connect With Us
            </h2>
            <p className="mb-8 text-blue-900/80 dark:text-blue-200/80 lg:w-5/6 text-justify text-lg">
              Ecocee is an MSME specializing in innovative embedded and IoT solutions.
              We design and develop customized hardware systems tailored to our clients&apos; unique needs and ideas.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-base">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-700 rounded-full p-2">
                <Building2 className="w-5 h-5" />
              </span>
              <div>
                <div className="font-bold text-blue-800">Find Us</div>
                <div className="text-gray-700 dark:text-gray-300">
                  Ecocee, Startup Office, Kodungallur, Thrissur District, Kerala-680663
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-700 rounded-full p-2">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="font-bold text-green-800">WhatsApp Us</div>
                <div className="text-gray-700 dark:text-gray-300">
                  +91 (889) 132-5138
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-700 rounded-full p-2">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="font-bold text-purple-800">Email Us</div>
                <div className="text-gray-700 dark:text-gray-300">
                  info@ecocee.in
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-100 text-yellow-700 rounded-full p-2">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <div className="font-bold text-yellow-800">Visit Us</div>
                <div className="text-gray-700 dark:text-gray-300">
                  <div>Monday - Friday</div>
                  <div>10 AM - 4 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <Card className="bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-xl rounded-2xl">
          <CardHeader className="text-blue-700 text-2xl font-bold text-center pb-0">
            Send Us a Message
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Arjun" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Unni" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="info@ecocee.in"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Embedded Hardware Development">
                            Embedded Hardware Development
                          </SelectItem>
                          <SelectItem value="IoT Solutions">
                            IoT Solutions
                          </SelectItem>
                          <SelectItem value="Prototype Development for Students">
                            Prototype Development for Students
                          </SelectItem>
                          <SelectItem value="App Development">App Development</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
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
                          rows={5}
                          placeholder="Your message..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4 bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-violet-700 hover:to-blue-700 transition-all">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
