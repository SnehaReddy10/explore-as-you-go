import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-3 lg:mx-14 xl:mx-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="projects/:id" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
