import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import ViewFilm from './universal_components/ViewFilm';
import Layout from './layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="view_film" element={<ViewFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


root.render(<App />);

