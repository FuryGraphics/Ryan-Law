import { useEffect } from "react";
import { CLIENT_INFO } from "@/lib/routes";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schemaType?: 'LegalService' | 'Attorney' | 'LocalBusiness' | 'FAQPage' | 'BreadcrumbList' | 'WebPage';
  schemaData?: Record<string, any>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  schemaType = "WebPage",
  schemaData,
  breadcrumbs
}: SEOProps) {
  const siteUrl = `https://${CLIENT_INFO.domain}`;
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}`;

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullCanonical);

    // Open Graph Tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": fullCanonical,
      "og:type": "website",
      "og:site_name": CLIENT_INFO.name,
      "og:image": CLIENT_INFO.images.heroBg,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Handle Schema Markup
    const existingSchema = document.getElementById("seo-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemas: any[] = [];

    // 1. Core Schema
    if (schemaType === "LegalService") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "@id": siteUrl,
        "name": CLIENT_INFO.name,
        "image": CLIENT_INFO.images.heroBg,
        "url": siteUrl,
        "telephone": CLIENT_INFO.phone,
        "email": CLIENT_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "16a Bel Air South Pkwy",
          "addressLocality": "Bel Air",
          "addressRegion": "MD",
          "postalCode": "21015",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.5165",
          "longitude": "-76.3614"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "areaServed": CLIENT_INFO.serviceAreas.map(area => ({
          "@type": "AdministrativeArea",
          "name": area
        }))
      });
    } else if (schemaType === "Attorney") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Attorney",
        "@id": `${siteUrl}/attorney`,
        "name": CLIENT_INFO.attorney,
        "image": CLIENT_INFO.images.portrait,
        "telephone": CLIENT_INFO.phone,
        "email": CLIENT_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "16a Bel Air South Pkwy",
          "addressLocality": "Bel Air",
          "addressRegion": "MD",
          "postalCode": "21015",
          "addressCountry": "US"
        },
        "worksFor": {
          "@type": "LegalService",
          "name": CLIENT_INFO.name,
          "url": siteUrl
        }
      });
    } else if (schemaType === "LocalBusiness" && schemaData) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `${CLIENT_INFO.name} - ${schemaData.locationName}`,
        "telephone": CLIENT_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": schemaData.locality || "Bel Air",
          "addressRegion": schemaData.region || "MD",
          "addressCountry": "US"
        },
        "url": `${siteUrl}${schemaData.path}`
      });
    }

    // 2. Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `${siteUrl}${crumb.item}`
        }))
      });
    }

    // 3. Custom Schema (e.g. FAQPage)
    if (schemaType === "FAQPage" && schemaData?.faqs) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": schemaData.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    if (schemas.length > 0) {
      const script = document.createElement("script");
      script.id = "seo-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      document.head.appendChild(script);
    }
  }, [title, description, fullCanonical, schemaType, schemaData, breadcrumbs]);

  return null;
}
