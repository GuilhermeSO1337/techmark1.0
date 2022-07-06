import styles from './../styles/Map.module.css';

export default function Map(){
    return(     
        <div className={styles.MapContainer}>
                <h2 className={styles.Tittle}>Onde Estamos</h2>
            <div className={styles.Map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0876789737417!2d-46.78005488446755!3d-23.52934866629713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffa9141246c3%3A0x84c4da9054e5a9fe!2sOsasco%20Plaza%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1654828357158!5m2!1spt-BR!2sbr" className={styles.Map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}