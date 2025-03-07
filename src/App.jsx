import React from 'react';
import Home from './Presentation/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Presentation/Create';
import Update from './Presentation/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Presentation" element={<Home />} />
        <Route path="/Presentation/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
