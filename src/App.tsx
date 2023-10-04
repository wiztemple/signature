import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import PersonalBanking from './pages/PersonalBanking'
import PrivateBanking from './pages/PrivateBanking'
import Business from './pages/Business'
import InstitutionalBanking from './pages/InstitutionalBanking'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/personal" element={<PersonalBanking />} />
              <Route path="/private" element={<PrivateBanking />} />
              <Route path="/business" element={<Business />} />
              <Route path="/institutional" element={<InstitutionalBanking />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
