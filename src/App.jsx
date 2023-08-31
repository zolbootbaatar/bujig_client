import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Check the import here
// import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import Category from './Pages/Category/Category';
import Posts from './Pages/Posts/Posts';
import PostDetial from './Pages/Posts/post_detial/Post_detial';

function App() {
  return (
    <Router> 
      <Navbar/>
      <Routes>
        {/* <Route path={'/'} element={<Home />} /> */}
        <Route exact path={'/'} element={<Category />} />
        <Route path={'/post/:id'} element={<Posts />}/>
        <Route path={'/postdetial/:id'} element={<PostDetial />}/>e
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;