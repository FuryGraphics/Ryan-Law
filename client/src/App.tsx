import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Page Imports
import Home from "./pages/Home";
import Attorney from "./pages/Attorney";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeAreaParent from "./pages/PracticeAreaParent";
import PracticeAreaSub from "./pages/PracticeAreaSub";
import Location from "./pages/Location";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { Disclaimer, PrivacyPolicy, TermsAndConditions, SitemapPage } from "./pages/Utilities";
import { PRACTICE_AREAS, LOCATION_PAGES } from "./lib/routes";

function Router() {
  return (
    <Switch>
      {/* Core Pages */}
      <Route path="/" component={Home} />
      <Route path="/attorney" component={Attorney} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
      {/* Utility Pages */}
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/sitemap" component={SitemapPage} />

      {/* Practice Area Hubs + Sub-pages (generated from config) */}
      {PRACTICE_AREAS.map((area) => (
        <Route key={area.slug} path={`/${area.slug}`}>
          <PracticeAreaParent type={area.slug} />
        </Route>
      ))}
      {PRACTICE_AREAS.map((area) => (
        <Route key={`${area.slug}-sub`} path={`/${area.slug}/:subSlug`}>
          {(params) => <PracticeAreaSub parentType={area.slug} subSlug={params.subSlug} />}
        </Route>
      ))}

      {/* Location Pages (generated from config) */}
      {LOCATION_PAGES.map((loc) => (
        <Route key={loc.slug} path={`/${loc.slug}`}>
          <Location slug={loc.slug} />
        </Route>
      ))}

      {/* Blog Posts */}
      <Route path="/blog/:slug">
        {(params) => <BlogPost slug={params.slug} />}
      </Route>

      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
