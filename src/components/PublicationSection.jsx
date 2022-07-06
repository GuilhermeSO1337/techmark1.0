import styles from './../styles/PublicationsSection.module.css';
import Publication from './Publication';
import video from './../video/video01.mp4';
import image from './../img/Limpeza.jpg';

let publication= [{
    ProfilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
    Tittle:'Alteração no horário',
    Description:'Nesta segunda-feira (23/05) estaremos abertos somente até as 18h.',
    MediaType:null
},{
ProfilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
Tittle:'Montamos o seu computador:',
Description:'Comprou as peças do seu computador e está com medo de trocar? Vem comigo!',
MediaDir: '/static/media/video01.015421ae62da53f1d323.mp4',
MediaType:'.mp4'
},{
    ProfilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
    Tittle:'Montamos o seu computador:',
    Description:'Você sabia que a limpeza de seu computador pode prolongar a vida útil do equipamento? ',
    MediaDir: '/static/media/Limpeza.694a184963c97380e6b6.jpg',
    MediaType:'.jpg'
    }
]
export default function PublicationSection(){
    return(
        <section className={styles.PublicationsSection}>
            <h2 className={styles.Tittle}>Publicações</h2>
            <div className={styles.PublicationsArea}>
                <div className={styles.Publications}>
                    <Publication {...publication[0]}/>
                    <Publication {...publication[1]}/>
                    <Publication {...publication[2]}/>
                </div>
            </div>
        </section>
    )
}