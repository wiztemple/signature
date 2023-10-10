import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import PersonalBanking from "./pages/PersonalBanking";
import PrivateBanking from "./pages/PrivateBanking";
import Business from "./pages/Business";
import InstitutionalBanking from "./pages/InstitutionalBanking";
import DigitalBanking from "./pages/DigitalBanking";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import BranchLocator from "./pages/BranchLocator";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import AMLPolicy from "./pages/AMLPolicy";
import OnlineSecurityTips from "./pages/OnlineSecurityTips";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/branch-locator" element={<BranchLocator />} />
          <Route path="/personal-banking" element={<PersonalBanking />} />
          <Route path="/private-banking" element={<PrivateBanking />} />
          <Route path="/business-banking" element={<Business />} />
          <Route path="/institutional-banking" element={<InstitutionalBanking />} />
          <Route path="/digital-banking" element={<DigitalBanking />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/online-security-tips" element={<OnlineSecurityTips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
