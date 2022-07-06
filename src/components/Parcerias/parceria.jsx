import './parceria.css'
import WeaMe from './weame.svg'
import loquei from './loquei.svg'
import BraillinCode from './braillincode.png'

function Parcerias(){
return(

    <section className='parceria1'>
            <div>
            <h3 className="Leitura_parcerias">Parcerias</h3>
        </div>
    <div className="Negocios_parcerias1">

    <div className="parceria 2 ">
    <div className="card_parceria" >
    <img src={BraillinCode} className="card-img-top_parceria" alt="..."/>

  </div>
  </div>

    <div className="parceria 3">
    <div className="card_parceria" >
  <img src={loquei} className="card-img-top_parceria" alt="..."/>
</div>
    </div>   
    <div className="parceria 4">
    <div className="card_parceira" >
  <img src={WeaMe}  className="card-img-top_parceria" alt="..."/>
  </div>
</div>
  </div>

    </section>
)
}
export default Parcerias;