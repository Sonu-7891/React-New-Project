
import './App.css'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from './components/home/homePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage'
import MoviesPage from './components/search/Moviepage';

function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Moviepage" element={<MoviesPage />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
