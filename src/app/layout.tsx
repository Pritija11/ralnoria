import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://ralnoria.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ralnoria — Cloud Infrastructure Orchestration",
    template: "%s · Ralnoria",
  },
  description:
    "Ralnoria is a cloud infrastructure orchestration startup based in Lalitpur, Nepal, giving platform teams one place to manage environments, deployment workflows, infrastructure configurations, and operational tasks.",
  keywords: [
    "Ralnoria",
    "cloud infrastructure orchestration startup",
    "platform engineering",
    "internal developer platform",
    "deployment workflow automation",
    "infrastructure configuration management",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ralnoria — Cloud Infrastructure Orchestration",
    description:
      "One place to manage cloud environments, deployment workflows, infrastructure configurations, and operational tasks.",
    siteName: "Ralnoria",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralnoria — Cloud Infrastructure Orchestration",
    description:
      "One place to manage cloud environments, deployment workflows, infrastructure configurations, and operational tasks.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ralnoria",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Ralnoria is a cloud infrastructure orchestration startup based in Lalitpur, Nepal, giving platform teams one place to manage environments, deployment workflows, infrastructure configurations, and operational tasks.",
  email: "hello@ralnoria.ltd",
  telephone: "+977-980-3344556",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanepa",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
