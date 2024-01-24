import React, { useEffect } from "react";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import { FullNews } from "./pages/id/FullNews.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/features/auth/authSlice.js";
import { MyPage } from "./pages/id/MyPage.jsx";
import { AddWord } from "./pages/AddWord.jsx";
import { MyWords } from "./pages/MyWords.jsx";


function App() {


  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`;

    const res = await fetch(geoApiUrl)
    const data = await res.json()
    if(data) {
      localStorage.setItem("position", JSON.stringify(data))
    }
    
  };

  navigator.geolocation.getCurrentPosition(success);
  


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<FullNews />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="addword" element={<AddWord />} />
        <Route path="myWords" element={<MyWords />} />
      </Routes>
      <ToastContainer position="top-center" draggable="100" />
    </Layout>
  );
}

export default App;
