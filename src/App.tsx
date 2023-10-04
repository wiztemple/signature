import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
