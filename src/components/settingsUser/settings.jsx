import imgProfie from "./foto_usuario.jpg"
import "./settings.css"
export function Account() {
    document.querySelector('.settings_settingsProfile').style.display="none"
    document.querySelector('.other_profile').style.display="block"
}
export function Account2() {
    document.querySelector('.settings_settingsProfile').style.display="block"
    document.querySelector('.other_profile').style.display="none"
}
function Setting(){
    
    return(
        <div className="settings">
             <div className="settins_principal">
                <ul className="account_items">
               <li className="account_items_link" onClick={Account2}>Account</li>
               <li className="account_items_link" onClick={Account} >Others Settings</li>
                </ul>

            </div> 
            <div className="settings_settingsProfile">

            <div className="account_profile"><h2>Account</h2></div>  
                <div className="photo_profile">
                    <div className="new_profile_photo">
                    <h4>Add new profile photo</h4>
                    <form action="" method="get" className="photo_profile_form">
                    <label className="input-personalizado">
                         <span className="botao-selecionar">Selecione uma imagem</span>
                    <img className="imagem_profile" />
                    <input type="file" accept="image/*" placeholder="Add photo" className="photo_profileInput"></input>      
                    <button type="submit" className="photo_profile_button">send</button>
                    </label>                       

                    </form>
                    </div>

                </div>

                <div className="name_profile">
                    <h4 className="name_title">
                       Name profile
                    </h4>
                     <h3 className="name_title1">
                        Jailson Costa dos Santos
                     </h3>
                </div>
            <div className="email_profile">
            <h4 className="email_title">
                E-mail of account
            </h4>
            <h3 className="email_title1">
                Jailson@gmail.com
            </h3>
            </div>
            <div className="password_profile">
                <h4 className="password_title1">
                    New password
                </h4>
                <input type="password" className="input_password1">
                </input>
                <h4 className="password_title2">
                    Confirm password
                </h4>
                <input type="password" className="input_password2">
                </input>
                <button className="password_button">send</button>
            </div>  
            <div className="buttons_profile">
                <button className="back_profile">Back to profile</button>
            <button className="exit_profile">Exit of your account</button></div>
            </div>
            <div className="other_profile">
                <h3>Do you wish delete your account? </h3>
                <div className="buttons_other_profile">
                <button className="yes_delete">Delete</button>
                    <button className="backTo_profile">Back to profile</button>
                </div>
            </div>

        </div>
    )
}
export default Setting;