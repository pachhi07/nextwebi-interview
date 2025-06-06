import { Routes, Route } from "react-router-dom";
import "./global.css";

//layouts
import SideNav from "./components/UI/SideNav/SideNav";
import Header from "./components/layouts/Header/Header";
import Home from "./components/pages/Home/Index";
import FooterTop from "./components/layouts/FooterTop/FooterTop";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return (
    <>
    <SideNav />     
       <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <FooterTop /> 
        <Footer />
    </>
  );
}

export default App;
