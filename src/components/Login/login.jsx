import './login.css'
import svg from './close.svg'
import { Link } from 'react-router-dom';

function Login() {
    function fechar(){
    document.querySelector('.login').style.display = "none";}
    return(
        <section className="login">
        <button className="close" onClick={fechar}><img src={svg} alt="" /></button>
          <h2 id="login1">Fazer Login</h2>  
          <form action="" className="login1">
            <label className='login' htmlFor="">e-mail</label>
          <input type="email" name="" id="e-mail"  placeholder="Digite seu e-mail..."/>
          <label className='login' htmlFor="">senha</label>
          <input type="password" name="" id="senha" placeholder="Digite sua senha"/> 
            <Link to="/cadastre"  className="create">Criar conta</Link>
            <a href="" className="hn">Hospede seu negócio </a>   
            <button type="submit" className="entrar">Entrar</button>
          </form>
        </section>
    )
    
}
export default Login;