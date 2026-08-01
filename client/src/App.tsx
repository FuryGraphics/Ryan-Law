import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ChatWidget from "./components/ChatWidget";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocationProvider } from "./contexts/LocationContext";

// Page Imports
import Portal from "./pages/Portal";
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
import { Disclaimer, PrivacyPolicy, TermsOfService, SitemapPage } from "./pages/Utilities";
import FileManager from "./pages/FileManager";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Root Gateway / Portal Selection Page */}
      <Route path="/" component={Portal} />
      
      {/* Location-Specific Homepage Routes */}
      <Route path="/bel-air" component={Home} />
      <Route path="/towson" component={Home} />
      <Route path="/dc" component={Home} />

      {/* Core Inner Pages */}
      <Route path="/attorney" component={Attorney} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
      {/* Utility Pages */}
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/sitemap" component={SitemapPage} />

      {/* Practice Area Parents */}
      <Route path="/criminal-defense">
        <PracticeAreaParent type="criminal-defense" />
      </Route>
      <Route path="/dui-defense">
        <PracticeAreaParent type="dui-defense" />
      </Route>

      {/* Practice Area Subs */}
      <Route path="/criminal-defense/:subSlug">
        {(params) => <PracticeAreaSub parentType="criminal-defense" subSlug={params.subSlug} />}
      </Route>
      <Route path="/dui-defense/:subSlug">
        {(params) => <PracticeAreaSub parentType="dui-defense" subSlug={params.subSlug} />}
      </Route>

      {/* Location Landing Pages */}
      <Route path="/bel-air-md">
        <Location slug="bel-air-md" />
      </Route>
      <Route path="/harford-county">
        <Location slug="harford-county" />
      </Route>
      <Route path="/cecil-county">
        <Location slug="cecil-county" />
      </Route>
      <Route path="/anne-arundel-county">
        <Location slug="anne-arundel-county" />
      </Route>
      <Route path="/prince-georges-county">
        <Location slug="prince-georges-county" />
      </Route>
      <Route path="/howard-county">
        <Location slug="howard-county" />
      </Route>
      <Route path="/washington-dc">
        <Location slug="washington-dc" />
      </Route>

      {/* File Manager */}
      <Route path="/files" component={FileManager} />

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
        <LocationProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <ChatWidget />
          </TooltipProvider>
        </LocationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
