import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form/Form';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="form"
            element={
              <Form
                onSubmit={(values) => {
                  console.log('Form Submitted', values);
                }}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {window.addEventListener('beforeunload', () => {
        localStorage.clear();
      })}
    </>
  );
}
