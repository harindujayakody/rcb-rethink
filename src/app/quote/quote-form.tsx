"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP = "94771600600";

const INTERESTS = [
  "Machinery",
  "Interlock Paving",
  "Cement Blocks",
  "Steel Construction",
  "Ready Mix",
  "Spare Parts & Service",
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [message, setMessage] = useState("");

  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello RCB Holdings, I'd like a quote.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterested in: ${interest}\n\nDetails: ${message}`
  )}`;

  return (
    <Card className="shadow-lift rounded-lg border-line">
      <CardContent className="p-6 sm:p-10">
        <h2 className="display text-3xl text-brand-ink sm:text-4xl">
          Request your quote
        </h2>
        <p className="mt-2 text-steel">
          Submit and your enquiry opens in WhatsApp — ready to send.
        </p>
        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waHref, "_blank", "noopener,noreferrer");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="q-name" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Name
              </label>
              <Input
                id="q-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-md"
              />
            </div>
            <div>
              <label htmlFor="q-phone" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Phone
              </label>
              <Input
                id="q-phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+94 ..."
                className="rounded-md"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="q-email" className="mb-1.5 block text-sm font-bold text-brand-ink">
                Email
              </label>
              <Input
                id="q-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-md"
              />
            </div>
            <div>
              <label htmlFor="q-interest" className="mb-1.5 block text-sm font-bold text-brand-ink">
                I&apos;m interested in
              </label>
              <Select value={interest} onValueChange={(v) => setInterest(v ?? INTERESTS[0])}>
                <SelectTrigger id="q-interest" className="rounded-md">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="rounded-md">
                  {INTERESTS.map((i) => (
                    <SelectItem key={i} value={i}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label htmlFor="q-message" className="mb-1.5 block text-sm font-bold text-brand-ink">
              Tell us about your requirement
            </label>
            <Textarea
              id="q-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Machine model, paving area, block quantity, site location…"
              rows={5}
              className="rounded-md"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-md bg-brand font-extrabold hover:bg-brand-deep"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Send Quote Request via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
