import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/pages/FunFacts';
import Goals from './components/pages/Goals';
import HireMe from './components/pages/HireMe';
import Education from './components/pages/Education';
import Tech from './components/pages/Tech';
import Leadership from './components/pages/Leadership';
import Hobbies from './components/pages/Hobbies';
import Work from './components/pages/Work';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add the HeroSection component here */}
          <Route path="/fun-facts" element={<AboutMe />} />
          <Route path="/my-goals" element={<Goals />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/work" element={<Work />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
