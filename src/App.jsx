import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Produto from "./Produto";
import Footer from "./Footer";
import Contato from "./Contato";
import ProdutoDescricao from "./ProdutoDescricao";
import "./loader.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/:id" element={<ProdutoDescricao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
