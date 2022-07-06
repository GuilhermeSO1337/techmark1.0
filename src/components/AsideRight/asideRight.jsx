import anuncio1 from "./ifood.jpg"
import "./asideRight.css"
function Anuncio(){
 return(
    <aside>
        <div className="anuncios">
         <h3>Anúncios</h3>
         <img className="anuncio_img" src={anuncio1} width={300} alt="" />
        </div>
    </aside>
 );
}
export default Anuncio;