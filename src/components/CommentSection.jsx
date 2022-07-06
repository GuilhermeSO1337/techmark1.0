import styles from "./../styles/CommentSection.module.css";
import { Icon } from '@iconify/react';
import ClientComment from "./ClientComment";
import ProfilePictureAdriana from "./../img/CommentProfilePictures/Adriana_profile.jfif";
import ProfilePictureRosani from "./../img/CommentProfilePictures/Rosani_profile.jfif";
import ProfilePictureWesley from "./../img/CommentProfilePictures/Wesley_profile.jfif";
import ProfilePictureMartinha from "./../img/CommentProfilePictures/Martinha_profile.jfif";


let ClientComments =[{
    UserName : "Adriana M. Pavaro",
    UserProfilePicture: "http://localhost:3000/static/media/Adriana_profile.37adc6aa01ddc2c4fc12.jfif",
    Comment : "Para vocês um beijo e um pão de queijo!",
    Time : "16 Agosto de 2023 15:15",
    evaluation: 5
},{
    UserName : "Rosanni Bertelli",
    UserProfilePicture:"/static/media/Rosani_profile.026e8b98d09f116002cb.jfif",
    Comment : "Vocês já preencheram os formulários?",
    Time : "18 Agosto de 2023 15:15",
    evaluation: 5
},{
    UserName : "Wesley L. de Lima",
    UserProfilePicture: "/static/media/Wesley_profile.58c6f63ec996da840819.jfif",
    Comment : "Você já são vencedores!",
    Time : "18 Agosto de 2023 15:15",
    evaluation: 5
},{
    UserName : "Marta Roberta P.",
    UserProfilePicture: "/static/media/Martinha_profile.de716a754d74a69dd74e.jfif",
    Comment : "Cadê o grupo 16 que não vem falar comigo?",
    Time : "18 Agosto de 2023 15:15",
    evaluation: 5
}]

export default function CommentSection(){
    return(
    <section className={styles.CommentSection}>
        <form className={styles.InsertCommentBox}>
                <Icon className={styles.ProfilePicture} icon="carbon:user-avatar-filled-alt"/>
                <input className={styles.CommentField} type="text" name="Coment"/>
                <Icon className={styles.SendComment} icon="fluent:send-16-filled" />
        </form>
        <div className={styles.CommentsArea}>
            <hr/>
            <div className={styles.CommentFilter}>
                <div className={styles.RateFilter}>
                    <p>Avaliações(1208)</p>
                    <Icon icon="akar-icons:chevron-down" width="30px" color="#525252" cursor="pointer" />
                </div>
                <Icon icon="bi:filter-right" width="40px" color="#525252" cursor="pointer"/>
            </div>
            <div className={styles.Comment}>
                {ClientComments.map((ClientComments)=>(<ClientComment {...ClientComments}/> ))}
            </div>
            <div className={styles.Pages}>
                <Icon className={styles.Chevrons} icon="akar-icons:chevron-left" color="#999" width="35px"/>
                <span className={styles.SelectedIndex}>1</span>
                <span>2</span>
                <span>3</span>
                <Icon className={styles.Chevrons} icon="akar-icons:chevron-right" color="#999" width="35px"/>
            </div>
        </div>
    </section>
    )
}
