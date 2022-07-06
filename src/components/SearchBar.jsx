import { Icon } from '@iconify/react';
import styles from './../styles/SearchBar.module.css';

export default function SearchBox() {
    return (
        <form action="">
                <div className={styles.SearchBox}>
                    <input className={styles.Search} type='text' placeholder='Faça uma pesquisa' />
                    <Icon className={styles.SearchIcon} icon="akar-icons:search" />
                </div>
        </form>
    )


}