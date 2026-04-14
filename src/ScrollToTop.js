import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./lib/analytics";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Track page view on route change
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
