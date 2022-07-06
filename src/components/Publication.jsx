import styles from './../styles/Publication.module.css'
import PublicationMedia from './PublicationMedia';


export default function Publication(PublicationData) {
    return (
        <div className={styles.Publication}>
            <img src={PublicationData.ProfilePicture} className={styles.ProfilePicture} alt='' />
            <div className={styles.Content}>
                <h2>{PublicationData.Tittle}</h2>
                <p>{PublicationData.Description}</p>
                <PublicationMedia className={styles.PublicationMedia} {...PublicationData}/>
            </div>
        </div>
    );
}
