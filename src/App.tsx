import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DISPage from "./pages/DISPage";
import GDSPage from "./pages/GDSPage";
import PPPage from "./pages/PPPage";
import ContactUsPage from "./pages/ContactUsPage";
import AcademicProgramsPage from "./pages/AcademicProgramsPage";
import DegreeOfferingsPage from "./pages/DegreeOfferingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academic-programs" element={<AcademicProgramsPage />} />
          <Route
            path="/development-innovation-and-sustainability"
            element={<DISPage />}
          />
          <Route path="/gender-and-development-studies" element={<GDSPage />} />
          <Route path="/public-policy" element={<PPPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/degree-offerings" element={<DegreeOfferingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
