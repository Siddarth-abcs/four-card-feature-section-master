import { useState } from 'react';
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Fourcard } from './four-card-feature-section-master/Fourcard';
import { Testimonialsgrid } from './testimonials-grid-section-main/Testimonialsgrid';


function App() {

  return (
      <Router>
        <Fourcard/>
      </Router>
  )
}

export default App
