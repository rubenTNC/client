import React from "react";
import { Layout } from "./components/Layout.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {RegisterPage} from "./pages/RegisterPage.jsx"
import {LoginPage} from "./pages/LoginPage.jsx"
import {Routes, Route} from "react-router-dom";
import { FullNews } from "./pages/id/FullNews.jsx";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:id" element={<FullNews/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
