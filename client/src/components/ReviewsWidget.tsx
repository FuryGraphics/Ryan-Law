import { useEffect, useRef, useState } from "react";

/**
 * Embeds a Local Marketing Manager reviews widget.
 *
 * The supplied snippet polls the DOM with setTimeout and rewrites the iframe
 * src on every resize event. Both are unnecessary here: React already owns the
 * element, and a ResizeObserver reports the container's width directly. The
 * behaviour that matters — picking a page size from the container width, and
 * only assigning src once that width is known — is preserved.
 */

const WIDGET_BASE = "https://www.localmarketingmanager.com/api/reviews";

/** Breakpoints from the vendor snippet, unchanged. */
function pageSizeForWidth(width: number): number {
  if (width < 450) return 1;
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

interface ReviewsWidgetProps {
  /** Widget slug, e.g. "ryan-law-llc-1-review-widget" for the DC office. */
  slug: string;
  title?: string;
}

export default function ReviewsWidget({ slug, title = "Reviews Widget" }: ReviewsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageSize, setPageSize] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const { offsetWidth } = container;
      // A zero width means the element is not laid out yet; ignore it rather
      // than loading the iframe with the wrong page size.
      if (offsetWidth > 0) setPageSize(pageSizeForWidth(offsetWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="reviewsWidgetContainer" ref={containerRef}>
      {pageSize !== null && (
        <iframe
          id="reviewsWidget"
          title={title}
          loading="lazy"
          src={`${WIDGET_BASE}/${slug}?pageSize=${pageSize}`}
          style={{ width: "100%", border: "none", minHeight: 300 }}
        />
      )}
    </div>
  );
}
