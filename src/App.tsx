import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import PersonalBanking from './pages/PersonalBanking'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/personal-banking" element={<PersonalBanking />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
