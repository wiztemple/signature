import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import PersonalBanking from "./pages/PersonalBanking";
import PrivateBanking from "./pages/PrivateBanking";
import Business from "./pages/Business";
import InstitutionalBanking from "./pages/InstitutionalBanking";
import DigitalBanking from "./pages/DigitalBanking";
import Media from "./pages/Media";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/personal-banking" element={<PersonalBanking />} />
          <Route path="/private-banking" element={<PrivateBanking />} />
          <Route path="/business-banking" element={<Business />} />
          <Route path="/institutional-banking" element={<InstitutionalBanking />} />
          <Route path="/digital-banking" element={<DigitalBanking />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
