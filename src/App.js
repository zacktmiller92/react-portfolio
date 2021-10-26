import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // const [pages] = useState([
  //   { name: 'About', id:1},
  //   { name: 'Projects', id:2},
  //   { name: 'Contact', id:3},
  //   { name: 'Resume', id:4}
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <main>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
