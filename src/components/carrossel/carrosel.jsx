import "./carroselmodule.css"
import lan from './lanhouse.jpg'
import React from 'react';
import transportadora from "./transportadora.jpg";
import InfiniteCarousel from 'react-leaf-carousel';
import estrela from "./estrela 1.svg"
import fruta from "./frutas.jpg"
import pintor from "./pintor.jpg"
import salao from "./salao.jpg"
let porcent=20


function star(){
if (porcent>=10){

}  else if(porcent>=20){
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
}if (porcent>=30){

 
  }  else if(porcent>=40){

  }if (porcent>=50){

    }  else if(porcent>=60){

    
    }if (porcent>=70){
    
      }  else if(porcent>=80){
 
      }if (porcent>=90){

        }  else if(porcent>=100){

        }
}


function Negocio() {
    return(
    <section className="carrossel-mes">
        <div>
            <h3 className="Negocios_carossel">Negócios de Destaque esse Mês</h3>
            <div className="linha01_carossel"></div>
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
<div className="Destaque_1">
<div className="card_negocio1">
<img src={transportadora} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Serviços</p>
     <a href="#" className="titleMes" >Transportadora felix</a>
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
<div className="Destaque_2">
<div className="card_negocio2">
<img src={fruta} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Mercados</p>
     <a href="#" className="titleMes2" >Frutumania</a>
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
<div className="Destaque_3">
<div className="card_negocio3">
<img src={salao} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Beleza</p>
     <a href="#" className="titleMes3" >Barbearia da Barbara</a>
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
<div className="Destaque_4">
<div className="card_negocio4">
<img src={pintor} className="card-img-top_negocio" width={300}alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Serviços</p>
     <a href="#" className="titleMes4" id="titleMes4" >Bruno Pintor</a>
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

  </InfiniteCarousel>
    </section>
    )
}
export default Negocio;