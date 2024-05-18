import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Stan from './Stan';
import Cus from './Cus';

function AppRouter() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/standard" element={<Stan />} />
      <Route path="/customize" element={<Cus />} />
      <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default AppRouter;