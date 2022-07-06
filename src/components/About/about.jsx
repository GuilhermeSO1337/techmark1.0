import leitura from './leitura.svg'
import './about.css'
function About() {
    return(
        <section className='sobre-nos'>
      <div>
            <h3 className="Leitura">Sobre Nós</h3>
        </div>
        <div className='leitura_about'>
            <img src={leitura} className='leitura_img' alt="" width='300px' />
        <aside className='leitura_sobre'>
            <div>
            <h3 className='leitura_somos'>Quem Nós Somos</h3>
            <p className='leitura_somos01'>A Techmark nasceu de um projeto organizado pelo instituto Proa, e atráves desse projeto ajudar o comércio local, e os pequenos empreendedores, além de oferecer serviço de qualidade para todos os nossos colaboradores, auxiliando assim a economia local</p>
            <h3 className='leitura_somos'>Como funcionamos</h3>
            <p className='leitura_somos02'>Somos a melhor solução para você microempreendedor e autonomo, que busca por uma plataforma de marketing. Aqui você pode criar o perfil da sua empresa e negócio conforme sua preferência. Para o usúario fornecemos uma expêriencia de busca com base na região de sua preferência, ou item desejado, auxiliando assim a otimização do seu tempo, e economia de dinheiro.
            </p>
            <button className='cadastro'>Cadastre-se</button>
            </div>
        </aside>  
        </div>
        </section>
    )
}
export default About;