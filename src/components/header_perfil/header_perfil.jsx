import "./header_perfil.css"
import foto_usuario from "../header_perfil/foto_usuario.jpg"
import settings from "./settings.svg"


function Perfil(){
    return(
        <header className="perfil">
            <div className="usuario_perfil">
                <img src={foto_usuario} alt="" className='foto_usuario' /*id ={}*/ width={170}/>
                <h2 className="usuario_nome">Jailson Costa dos Santos</h2>
             
            </div> 
              <div className="Config_usuarios">
                    <a href="" className="config_usuario"> <img src={settings} alt="" /></a>
                </div>
        </header>
    )

}
export default Perfil;