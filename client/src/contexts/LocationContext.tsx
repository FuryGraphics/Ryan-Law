import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { LOCATION_CONFIGS } from "@/lib/routes";

export interface LocationConfig {
  name: string;
  city: string;
  phone: string;
  phoneRaw: string;
  address: string;
  mapEmbed: string;
}

interface LocationContextType {
  currentLocation: LocationConfig;
  locationKey: "bel-air" | "towson" | "dc";
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [wLocation] = useLocation();
  const [locationKey, setLocationKey] = useState<"bel-air" | "towson" | "dc">("bel-air");

  useEffect(() => {
    // 1. Detect location from explicit route path
    if (wLocation.startsWith("/dc") || wLocation.startsWith("/washington-dc")) {
      setLocationKey("dc");
      sessionStorage.setItem("ryan_law_location_pref", "dc");
    } else if (wLocation.startsWith("/towson")) {
      setLocationKey("towson");
      sessionStorage.setItem("ryan_law_location_pref", "towson");
    } else if (wLocation.startsWith("/bel-air") || wLocation.startsWith("/harford-county") || wLocation.startsWith("/cecil-county")) {
      setLocationKey("bel-air");
      sessionStorage.setItem("ryan_law_location_pref", "bel-air");
    } else {
      // 2. Fallback to sessionStorage if browsing other subpages (like /attorney, /blog)
      const storedPref = sessionStorage.getItem("ryan_law_location_pref") as "bel-air" | "towson" | "dc" | null;
      if (storedPref && ["bel-air", "towson", "dc"].includes(storedPref)) {
        setLocationKey(storedPref);
      } else {
        // Default fallback is Bel Air
        setLocationKey("bel-air");
      }
    }
  }, [wLocation]);

  const currentLocation = LOCATION_CONFIGS[locationKey] || LOCATION_CONFIGS["bel-air"];

  return (
    <LocationContext.Provider value={{ currentLocation, locationKey }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationSettings() {
  const context = useContext(LocationContext);
  if (!context) {
    return {
      currentLocation: {
        name: "Bel Air",
        city: "Bel Air, MD",
        phone: "(443) 348-0434",
        phoneRaw: "tel:+14433480434",
        address: "16a Bel Air South Pkwy, Bel Air, MD 21015",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.657387441314!2d-76.3533814!3d39.5006323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7de29f27c320f%3A0x24d63428987d609c!2s16a%20Bel%20Air%20South%20Pkwy%2C%20Bel%20Air%2C%20MD%2021015!5e0!3m2!1sen!2sus!4v1717320000000!5m2!1sen!2sus"
      },
      locationKey: "bel-air" as const
    };
  }
  return context;
}
