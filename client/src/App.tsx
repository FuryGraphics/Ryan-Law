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
import { Disclaimer, PrivacyPolicy, SitemapPage } from "./pages/Utilities";

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

      {/* Location Pages */}
      <Route path="/bel-air-md">
        <Location slug="bel-air-md" />
      </Route>
      <Route path="/harford-county">
        <Location slug="harford-county" />
      </Route>
      <Route path="/cecil-county">
        <Location slug="cecil-county" />
      </Route>
      <Route path="/baltimore-county">
        <Location slug="baltimore-county" />
      </Route>
      <Route path="/washington-dc">
        <Location slug="washington-dc" />
      </Route>

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
