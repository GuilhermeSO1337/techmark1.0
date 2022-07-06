import React from "react";
import Navbar from "../components/navbar/navbar";
import Login from "../components/Login/login";
import Header from "../components/header/header";
import Menu from "../components/menu/menu"
import Negocio from "../components/carrossel/carrosel";
import About from "../components/About/about";
import Negocio2 from "../components/carrossel1/carrosel1";
import Regioes from "../components/Regioes/regioes";
import Parcerias from "../components/Parcerias/parceria";
import Footer from '../components/Footer/Footer';
function Home() {
    return(
        <div>
            <Navbar/>
            <Login/>
            <Header/>
            <Menu/>
            <Negocio/>
            <About/>
            <Negocio2/>
            <Regioes/>
            <Parcerias/>
            <Footer/>
        </div>
    )
};
export default Home;