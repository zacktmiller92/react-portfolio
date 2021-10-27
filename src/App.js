import React, {useState } from 'react';

import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [pages] = useState([
    { name: 'About', component: <About/>},
    { name: 'Projects', component: <Project/>},
    { name: 'Contact', component: <Contact/>},
    { name: 'Resume', component: <Resume/>}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);



  return (
    <main>
      <Header
      pages = {pages}
      setCurrentPage = {setCurrentPage}
      ></Header>
      {currentPage.component}
      <Footer></Footer>
    </main>
  );
}

export default App;
