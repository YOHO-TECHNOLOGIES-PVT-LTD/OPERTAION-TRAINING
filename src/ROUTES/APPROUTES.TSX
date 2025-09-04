import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "@/pages/about";

const AppRoutes: React.FC = () => {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
      </Routes>
    </div>
  );
};

    export default AppRoutes;