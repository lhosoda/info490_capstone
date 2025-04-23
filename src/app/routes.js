import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// import Socialicons from "../socialicons"; 

import Chatbot from "../pages/chatbot";
import Forum from "../pages/forum";
import Modules from "../pages/modules";
import Home from '../pages/home';
import NavBar from '../pages/navbar';

function AppRoutes() {
  return (
    <div className="s_c">
      {/* <Socialicons /> */}
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </div>
  )
}

export default AppRoutes;
