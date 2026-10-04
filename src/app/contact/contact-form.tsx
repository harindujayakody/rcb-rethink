"use client";

import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/data";

const WHATSAPP = "94771600600";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello RCB Holdings,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
  )}`;
  const mailtoHref = `mailto:${CONTACT.emails[0]}?subject=${encodeURIComponent(
    `Website enquiry from ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <Card className="rounded-lg border-line">
      <CardContent className="p-6 sm:p-8">
        <h3 className="display text-3xl text-brand-ink">Send an enquiry</h3>
        <p className="mt-2 text-steel">
          Fill this in and we will reach out during business hours.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waHref, "_blank", "noopener,noreferrer");
          }}
        >
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block text-sm font-bold text-brand-ink">
              Name
            </label>
            <Input
              id="cf-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-bold text-brand-ink">
              Phone
            </label>
            <Input
              id="cf-phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+94 ..."
              className="rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block text-sm font-bold text-brand-ink">
              Email
            </label>
            <Input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cf-message" className="mb-1.5 block text-sm font-bold text-brand-ink">
              Message
            </label>
            <Textarea
              id="cf-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you need?"
              rows={4}
              className="rounded-md"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-md bg-brand font-extrabold hover:bg-brand-deep"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>
          <p className="text-center text-sm text-steel">
            Prefer email?{" "}
            <a href={mailtoHref} className="font-bold text-brand hover:underline">
              <Mail className="mr-1 inline h-4 w-4" />
              Email us instead
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
