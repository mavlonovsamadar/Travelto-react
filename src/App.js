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
import Registration from './components/Registration/Registration';
import { Private } from './components/Registration/Private';
import Tablelist from './components/Registration/Table';
import Login from './components/Registration/Login';
import LoginSuccces from './components/Registration/LoginSuccess';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={
            <Private>
              <RouterCompo/>
            </Private>
          }/>

          <Route path="*" element={<NotFound/>}/>
          <Route path="/reg" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LoginSuccces />} />

          <Route path="/table" element={
            <Private>
          <Tablelist />
          </Private>
          } />

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
