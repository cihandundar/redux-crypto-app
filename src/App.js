import { Navbar } from "components";
import { CoinDetails, Home, CoinList } from "pages";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<CoinList />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
