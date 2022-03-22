import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/home';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import {GithubProvider} from './context/github/GithubContext'
import { AlertProvider } from './context/Alert/AlertContext';




function App() {
  return (
    <GithubProvider>
      <AlertProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />
                <main className='container mx-auto px-3 pb-12'>
                  
                  <Routes>
                    <Route path='/' element={<Home />}  />
                    <Route path='/about' element={<About />}  />
                    <Route path='/notfound' element={<NotFound />}  />
                    <Route path='/*' element={<NotFound />}  />
                  </Routes>
                </main>
              <Footer />
            </div>
        </Router>
        </AlertProvider>
     </GithubProvider>
   
  );
}

export default App;
