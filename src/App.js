import React from 'react'
// import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
// import SectionText from './components/SectionText/SectionText';
// import Section from './components/SectionCard/Section';
// import SectionSearch from './components/SectionSearch/SectionSearch';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouterCompo from './components/RouterCompo1/RouterCompo';
import NotFound from './components/NotFound';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RouterCompo/>}/>
          <Route path="*" element={<NotFound/>}/>
      {/* <Header />
      <Section />
      <SectionText />
      <SectionSearch /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
