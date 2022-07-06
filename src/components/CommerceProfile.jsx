import styles from './../styles/ProfileSection.module.css';
import './../img/Profile_Picture.jpg';
import Emphasis from './../img/Emphasis_Icon.svg';

let CommerceProfile = {
    name : 'Lan-house do Emerson',
    profilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
    status: 'Deus é fiel'
}

export default function Profile() {
    return(
            <div className={styles.ProfileInformation}>
                <div className={styles.ProfilePictureBorder}>
                    <div className={styles.ProfilePicture}>
                        <img src={CommerceProfile.profilePicture} alt='' />
                    </div>
                    <img className={styles.Emphasis} src={Emphasis} alt=''></img>
                </div>
                <h2>{CommerceProfile.name}</h2>
                <p>{CommerceProfile.status}</p>
            </div>
    )
}