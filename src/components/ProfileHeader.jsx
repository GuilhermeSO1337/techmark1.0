import styles from './../styles/ProfileHeader.module.css';
import { Icon } from '@iconify/react';
import './../img/Profile_Picture.jpg';
import Profile from './CommerceProfile';
import ProfileInputs from './ProfileInputs';

export default function ProfileHeader() {
    return (
        <div>
            <div className={styles.ProfileItens}>
                <div className={styles.Cover}>
                        <div className={styles.Profile}>
                            <Profile/>
                            <div className={styles.ProfileInputs}><ProfileInputs/></div>
                        </div>
                    <div className={styles.Banner}>
                        <div className={styles.BannerIcons}>
                            <Icon icon="akar-icons:whatsapp-fill" className={styles.WhatsappIcon} />
                            <Icon icon="akar-icons:instagram-fill" className={styles.InstagramIcon} />
                            <Icon icon="akar-icons:facebook-fill" className={styles.FacebookIcon} />
                        </div>
                    </div>
                </div>
                <div className={styles.Buttons}>
                </div>
            </div>
        </div>
    );
} 