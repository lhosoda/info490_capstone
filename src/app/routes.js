import React from "react";
import { Route, Routes } from "react-router-dom";
// import Socialicons from "../socialicons"; 

import Chatbot from "../pages/chatbot";
import Forum from "../pages/forum";
import Modules from "../pages/modules";
import Home from '../pages/home';

function AppRoutes() {
  return (
    <div className="s_c">
      {/* <Socialicons /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
