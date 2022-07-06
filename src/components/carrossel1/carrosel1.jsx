import "./carrosel1module.css"
import lan from './computadores.jpg'
import churrasco from './churrasco.jpg'
import bolos from './bolos.jpg'
import roupas from './roupas.jpg'
import sobrancelhas from './sobrancelha.jpg'
import mercadinho from './mercadinho.jpg'
import React from 'react';
import estrela from "./estrela 1.svg"

import InfiniteCarousel from 'react-leaf-carousel';
function Negocio2() {
    return(
    <section className="carrossel">
        <div>
            <h3 className="Negocios_carossel1">Negócios de Destaque essa Semana</h3>
            <div className="linha01_carossel1"></div>
        </div>
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div className="Negocios_destaques1">
    <div className="Destaques 1">
<div className="card_negocio1">
<img src={lan} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Serviços</p>
<h3 className="card-title"><a href="#">Lan House do Emerson</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
</div>
    <div>
    <div className="Destaque 2 ">
<div className="card_negocio1">
<img src={mercadinho} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Mercados</p>
<h3 className="card-title"><a href="#">Quitanda de banda</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 3">
<div className="card_negocio1">
<img src={sobrancelhas} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Beleza</p>
<h3 className="card-title"><a href="#">Raquel Sobrancelhas</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 4">
<div className="card_negocio1">
<img src={churrasco} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Restaurantes</p>
<h3 className="card-title"><a href="#">Espetinhos Churrascada</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 5">
<div className="card_negocio1">
<img src={bolos} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Restaurante</p>
<h3 className="card-title"><a href="#">Bom confeito</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
</div>
    <div>
    <div className="Destaque 6">
<div className="card_negocio1">
<img src={roupas} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Roupas</p>
<h3 className="card-title"><a href="#">Passe e compre</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
</div>
  </InfiniteCarousel>
    </section>
    )
}
export default Negocio2;