import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./component/Layout/Footer"
import Navbar from "./component/Layout/Navbar"
import About from "./Pages/About"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen ">
        <Navbar className="sticky" />
        <main className="container mx-auto px-3 pb-12 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
