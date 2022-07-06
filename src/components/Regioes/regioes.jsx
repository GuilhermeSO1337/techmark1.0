import InfiniteCarousel from 'react-leaf-carousel';
import './regioes.css'
import centro from './Centro.jpg'
import leste from './leste.jpg'
import oeste from './Oeste.jpg'
import norte from './norte.jpg'
import sul from './sul.jpg'

function Regioes(){
    return(
        <section className='regioes1'>
                <div>
            <h3 className="Leitura_regioes">Procure por São Paulo</h3>
        </div>
        <div className='carrossel_regioes'>
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

    <div className="Destaque 2 ">
    <div className="card_regioes" >
  <img src={leste} className="card-img-top_regioes" alt="..."/>
  <div className="card-body_regioes">
     <a href=''className='regioes'> <h2 className='text1'>Leste</h2></a>
  </div>
  </div>
  </div>
  </div>
    <div className="Destaque 3">
    <div className="card_regioes" >
  <img src={centro} className="card-img-top_regioes" alt="..."/>
  <div className="card-body_regioes1">
  <a href=''className='regioes'><h2 className='text2'>Centro</h2></a>
  </div>
</div>
    </div>   
    <div className="Destaque 4">
    <div className="card_regioes" >
  <img src={oeste} className="card-img-top_regioes" alt="..."/>
  <div className="card-body_regioes2">
  <a href=''className='regioes'> <h2 className='text3'>Oeste</h2></a>
  </div>
</div>
    </div>
    <div className="card_regioes" >
  <img src={norte} className="card-img-top_regioes" alt="..."/>
  <div className="card-body_regioes3">
  <a href=''className='regioes'> <h2 className='text4'>Norte</h2></a>
  </div>
</div>
<div className="card_regioes" >
  <img src={sul} className="card-img-top_regioes" alt="..."/>
  <div className="card-body_regioes4">
  <a href='' className='regioes'> <h2 className='text5'>Sul</h2></a>
  </div>
</div>
  </InfiniteCarousel>
  </div>
        </section>
    )
}
export default Regioes;