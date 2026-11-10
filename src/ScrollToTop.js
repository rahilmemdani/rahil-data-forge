import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./lib/analytics";

// Scrolls to the top on route change, or to #section when the URL has a hash.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section has rendered after navigation
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
    trackPageView(pathname + hash);
  }, [pathname, hash]);

  return null;
}
