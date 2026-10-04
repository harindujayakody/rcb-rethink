import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactDock } from "@/components/contact-dock";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RCB Holdings | Construction Machinery & Building Solutions Sri Lanka",
    template: "%s | RCB Holdings Sri Lanka",
  },
  description:
    "RCB Holdings (Pvt) Ltd — construction machinery, block making machines, interlock paving, cement blocks, steel construction and ready mix concrete in Sri Lanka. Over 30 years pioneering the industry.",
  keywords: [
    "interlock paving Sri Lanka",
    "construction machinery Sri Lanka",
    "wheel loaders Sri Lanka",
    "excavators Sri Lanka",
    "block making machine Sri Lanka",
    "cement blocks",
    "RCB Holdings",
  ],
  openGraph: {
    type: "website",
    siteName: "RCB Holdings (Pvt) Ltd",
    title: "RCB Holdings | Construction Machinery & Building Solutions Sri Lanka",
    description:
      "Machinery, paving and blocks for every site — from our yard in Hokandara to your project.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RCB Holdings (Pvt) Ltd",
  description:
    "Construction machinery, block making machines, interlock paving, cement blocks, steel construction and ready mix concrete.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 516/2, Hokandara North",
    addressLocality: "Hokandara",
    addressCountry: "LK",
  },
  telephone: "+94 112 561 959",
  openingHours: "Mo-Sa 08:30-17:30",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ContactDock />
      </body>
    </html>
  );
}
