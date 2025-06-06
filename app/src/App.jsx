import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import Tools from './pages/Tools'
import Contact from './pages/Contact'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
