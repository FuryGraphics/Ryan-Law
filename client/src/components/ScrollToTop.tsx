import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Wouter preserves the window scroll offset across navigations, so moving from
 * a long page you had scrolled down to a shorter one drops you partway into
 * (or past the end of) the new page. Reset to the top whenever the path
 * changes, while leaving browser back/forward restoration alone.
 */
export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // A hash link is asking for a specific element, not the top of the page.
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
