import styles from "./../styles/Gallery.module.css"
import {Icon} from "@iconify/react"
import image from "./../img/Gallery/lanhouse.jpg"


let GalleryPicture = [{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
}]

export default function Gallery(){
    return(
        <div className={styles.GallerySection}>
            <h2 className={styles.Tittle}>Galeria</h2>
            <div className={styles.GalleryContent}>
                <div className={styles.GalleryPictures}>
                    <div className={styles.MainPicture}>
                        <h3>{GalleryPicture[0].title}</h3>
                        <div className={styles.MainPictureContent}>                          
                            <img src={GalleryPicture[0].picture} alt=""/>
                        </div>
                        <p>{GalleryPicture[0].description}</p>
                    </div>
                </div>
                <div className={styles.PicturesCollection}>
                    <div className={styles.Inputs}>
                        <Icon className={styles.Chevron} icon="charm:chevron-up" width="40px" />
                        <Icon className={styles.Chevron} icon="charm:chevron-down" width="40px"/>
                    </div>
                        <div className={styles.PicturesCollectionImages}>
                            {GalleryPicture.map( (GalleryPicture) => {return <img src={GalleryPicture.picture} alt=""/>})}
                        </div>
                </div>
            </div>
        </div>
    )
}