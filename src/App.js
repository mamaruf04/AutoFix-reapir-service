import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Experts from "./Pages/Home/Experts/Experts";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import ServiceDetail from "./Pages/SeviceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/experts" element={<Experts></Experts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
