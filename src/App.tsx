import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CrisesArchive from "./pages/CrisesArchive";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Timeline from "./pages/TimeLine";
import AidEfforts from "./pages/AidEfforts";
import DataOverview from "./pages/DataOverview";
import Organizations from "./pages/Organizations";
import Testmonials from "./pages/Testmonials";
import Case from "./pages/Case";

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/crises_archive" element={<CrisesArchive />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/aid-efforts" element={<AidEfforts />} />
            <Route path="/data-overview" element={<DataOverview />} />
            <Route
              path="/organization/:organizationId"
              element={<Organizations />}
            />
            <Route path="/organizations" element={<Organizations />} />
            {/* Add routes for both patterns */}
            <Route path="/story/:storyId" element={<Testmonials />} />
            <Route path="/testimony/:storyId" element={<Testmonials />} />
            <Route path="/testmonials/:storyId" element={<Testmonials />} />
            <Route path="/testmonials" element={<Testmonials />} />
            // Add this route to your existing routes
            <Route path="/case/:caseId" element={<Case />} />
            <Route path="/case" element={<Case />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
