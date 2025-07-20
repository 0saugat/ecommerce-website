import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
