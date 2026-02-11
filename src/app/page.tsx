import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naja Events | Premium Light & Sound Solutions for Events",
  description: "Professional light and sound rental services for weddings, concerts, corporate events & festivals. Premium audio systems, dynamic lighting design & complete event production.",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Naja Events",
  description: "Professional light and sound rental services for all types of events",
  url: "https://najaevents.com",
  telephone: "+1-234-567-890",
  email: "info@najaevents.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Event Street",
    addressLocality: "City",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  image: "https://najaevents.com/images/hero.png",
  sameAs: [
    "https://facebook.com/najaevents",
    "https://instagram.com/najaevents",
    "https://twitter.com/najaevents",
    "https://linkedin.com/company/najaevents",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium Sound Systems",
          description: "Professional audio systems for events of any size",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dynamic Lighting Design",
          description: "Custom lighting solutions and stage design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Event Solutions",
          description: "Full-service event production and technical support",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
