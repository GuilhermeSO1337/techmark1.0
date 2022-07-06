import Logo from './../logo.svg';
import styles from './../styles/header.module.css';
import { Icon } from '@iconify/react';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Switch } from "@mui/material";
import SearchBar from './SearchBar';

let Menu;

export default function Header(){

    var [ShowMenu, setShowMenu] = useState(false);

    const OpeningStyle = {
        OpenMenu : {
            transform: 'translateX(0vh)'
        }
    } 

    if(ShowMenu){
        Menu = <div style={OpeningStyle.OpenMenu}><ul className={styles.MenuDisplay}>
                    <li>Usuário</li>
                    <li>Acessibilidade</li>
                    <li>Tema <Switch id='SwitchButton' /></li>
                </ul></div>
    }
        return (
            <header>
                <div className={styles.TopSection}>
                    <a href="#home"><img className={styles.Logo} src={Logo} alt='Logo techmark' /></a>
                    <div className={styles.Icons}>
                        <Icon className={styles.DarkMode} icon="gg:dark-mode" />
                        <Icon className={styles.Accessibility} icon="radix-icons:accessibility" />
                        <Icon className={styles.UserProfile} icon="carbon:user-avatar-filled-alt" />
                    </div>
                    <div className={styles.Mobile}>
                        <Icon className={styles.MobileSearchIcon} icon="akar-icons:search" />
                        <MenuIcon className={styles.MenuIcon} onClick={() => setShowMenu(!ShowMenu)}/>
                    </div>
                </div>
                <hr className={styles.Hr} />
                {Menu}
                <div className={styles.SearchBar}>
                    <SearchBar/>
                </div>
            </header>
        );
    }
