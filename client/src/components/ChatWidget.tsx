import { useEffect } from "react";

const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a296beea7554820d92d0d95";

/**
 * Loads the LeadConnector chat widget. Mounted once at the app root so the
 * widget is available on every page; the loader injects its own <chat-widget>
 * element into <body> and persists across client-side navigation.
 */
export default function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${LOADER_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-resources-url", RESOURCES_URL);
    script.setAttribute("data-widget-id", WIDGET_ID);
    document.body.appendChild(script);
  }, []);

  return null;
}
