import styles from './../styles/InputProfile.module.css';
import { Icon } from '@iconify/react';

export default function ProfileInputs(){
    return(
        <div className={styles.InputContainer}>
            <form action="">
                <input className={styles.FollowButton} type='submit' value='Seguir'/>
            </form>
            <button className={styles.SendMensagem}><Icon icon="bi:send-fill" width='24px'/></button>
        </div>
    );
}