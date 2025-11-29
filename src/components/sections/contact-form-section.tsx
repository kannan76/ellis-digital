"use client";

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact Us" },
];

const ContactFormSection = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-40" data-scroll-section>
      <div className="container max-w-[1312px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Info + Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Ramanathapuram</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saravanapriyan Tuition Centre<br />
                  Ramanathapuram, Tamil Nadu<br />
                  India
                </p>
                <p className="mt-4 text-muted-foreground">
                  📞 +91 XXXXX XXXXX <br />
                  📩 info@saravanapriyantuition.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <nav>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-base">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-[3.5rem] font-semibold leading-tight mb-10">
              Contact Us
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Parent / Student Name*" required className="h-14 rounded-lg bg-input border-border placeholder:text-muted-foreground" />
                <Input type="tel" placeholder="Phone Number*" required className="h-14 rounded-lg bg-input border-border placeholder:text-muted-foreground" />
              </div>

              <Input type="email" placeholder="Email Address (Optional)" className="h-14 rounded-lg bg-input border-border placeholder:text-muted-foreground" />

              <Select>
                <SelectTrigger className="h-14 rounded-lg bg-input border-border text-muted-foreground">
                  <SelectValue placeholder="Class / Grade*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">6th Standard</SelectItem>
                  <SelectItem value="7">7th Standard</SelectItem>
                  <SelectItem value="8">8th Standard</SelectItem>
                  <SelectItem value="9">9th Standard</SelectItem>
                  <SelectItem value="10">10th Standard</SelectItem>
                  <SelectItem value="11">11th Standard</SelectItem>
                  <SelectItem value="12">12th Standard</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Message / Query*"
                required
                rows={4}
                className="min-h-[120px] rounded-lg bg-input border-border placeholder:text-muted-foreground"
              />

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="privacy" className="mt-[3px] rounded-[4px] border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"/>
                <label htmlFor="privacy" className="text-sm text-muted-foreground font-light">
                  I agree to be contacted regarding my enquiry.
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="rounded-full px-8 py-7 h-auto font-semibold text-base leading-none transform hover:scale-105 transition-transform duration-300">
                  Submit Enquiry
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <Link
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="text-accent-cyan underline text-base hover:text-white"
              >
                💬 Contact on WhatsApp
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
