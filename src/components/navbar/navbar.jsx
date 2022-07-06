import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo2 from './logooficce.svg'
import usuario from './usuario.svg'
import usuario2 from './usuario2.svg'
import modo from './modo.svg'
import modo2 from './modo2.svg'
import './navbar.css'
import logo from './logo.svg'; 
import { useEffect } from "react";
function white() {

  document.querySelector('.nav_link').style.color="";
  document.querySelector('.nav_link1').style.color="";
  document.querySelector('.nav_link2').style.color="";
  document.querySelector('.nav_link3').style.color="";
//  document.querySelector('.titleMes').style.color=""; 
//  document.querySelector('.titleMes2').style.color=""; 
//    document.querySelector('.titleMes3').style.color="";
//    document.querySelector('.titleMes4').style.color=""; 
  document.querySelector('.leitura_somos01').style.color="black";
  document.querySelector('.leitura_somos02').style.color=" black";
  document.querySelector('.modo').style.backgroundColor="#fff ";
  document.querySelector('.nav').style.background="#fff ";
  document.querySelector('#img').style.display = "";
  document.querySelector('#img2').style.display = "";
  document.querySelector('#usuario').style.display = "";
  document.querySelector('#modo').style.display = "";
  document.querySelector('#usuario2').style.display = "none";
  document.querySelector('#modo2').style.display = "none";
  document.querySelector('.usuario').style.backgroundColor=" #fff";
  document.querySelector('body').style.backgroundColor=" #fff";
  document.querySelector('.Leitura_parcerias').style.color='';
  // document.querySelector('.carrossel-mes').style.color='';
  // document.querySelector('.card-body').style.color="black";
}
function black() {
  // document.querySelector('.carrossel').style.color=' #fff';
  // document.querySelector('#titleMes4').style.color=" #fff";
  document.querySelector('.nav_link').style.color=" #fff";
  document.querySelector('.nav_link1').style.color=" #fff";
  document.querySelector('.nav_link2').style.color=" #fff";
  document.querySelector('.nav_link3').style.color=" #fff"; 
  // document.querySelector('.titleMes').style.color=" #fff"; 
  // document.querySelector('.titleMes2').style.color=" #fff";
  // document.querySelector('.titleMes3').style.color=" #fff";
  document.querySelector('.leitura_somos01').style.color=" #fff";
  document.querySelector('.leitura_somos02').style.color=" #fff";
  document.querySelector('.modo').style.backgroundColor=" #212121";
  document.querySelector('.nav').style.background=" #212121";
  document.querySelector('#img').style.display = "none";
  document.querySelector('#img2').style.display = "block";
  document.querySelector('#usuario').style.display = "none";
  document.querySelector('#modo').style.display = "none";
  document.querySelector('#usuario2').style.display = "block";
  document.querySelector('#modo2').style.display = "block";
  document.querySelector('.usuario').style.backgroundColor=" #212121";
  document.querySelector('body').style.backgroundColor=" #212121";
  document.querySelector('.Leitura_parcerias').style.color='#fff';
  document.querySelector('.carrossel-mes').style.color='#fff';

}

function exibirlogin() {
  document.querySelector('.login').style.display = "block";}

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [tema, setTema] = useState('light');
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    function mudarTema(){
      if (tema=="light") {
        setTema("dark")
      }else{
        setTema("light")
      }
    }
    useEffect(() => {
      if(tema=="light"){
        white()
      }else{
        black()
      }
    },[tema])
    return(
        <nav className="nav">
            <a href="#" className="nav_brand"><img src={logo} title='Techmark' alt="Techmark" id='img' /><img src={logo2} id='img2'/></a>
            <ul className={active}>
                <li className="nav_item"><Link to='/' className="nav_link">Home</Link></li>
                <li className="nav_item"><a href="#" className="nav_link1">Comércios</a></li>
                <li className="nav_item"><Link to='/hospede' className="nav_link2">Hospede</Link></li>
                <li className="nav_item"><Link to='/cadastre' className="nav_link3">Cadastre-se</Link></li>
            </ul>
            <div className="botoes" method="post">
        <button className="modo" onClick={mudarTema}> <img src={modo} title='modo' alt="mudar tema" id="modo"/><img src={modo2}  id="modo2"/> </button>
         <button className="usuario" onClick={exibirlogin}> <img src={usuario} title='perfil' alt="perfil de usúario" id="usuario"/><img src={usuario2} id="usuario2"/><img src={usuario} title='perfil' alt="perfil de usúario" id="usuario3"/></button>
            </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        
        </nav>
    );
}
export default Navbar;
<img src={modo2} id='modo2' title="modo" alt="mudar tema" onClick={white}/>