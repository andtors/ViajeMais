import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Container from "./components/Container";

import Homepage from './pages/Homepage'
import Blog from "./pages/Blog";
import ImageGallery from "./pages/ImageGallery";
import Contact from "./pages/Contact";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Container>
              <Routes> 
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/blog" element={<Blog />}></Route>
                  <Route path="/galeria" element={<ImageGallery />}></Route>
                  <Route path="/contato" element={<Contact />}></Route>
              </Routes>
            </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
