import { use } from "react";
import { LoginElements } from "./login.elements";
import { Logger } from "../../Util/logger";
import { CommonPageMetodos } from "../common-page/common-page.methods";

export class LoginMethos{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        return LoginElements.buttons.login.click({force:true})
            
    }

    static iniciarSesion (username, password){
        Logger.subPaso('Ingresar usuario')
        this.insertUsername(username)
        Logger.subPaso('Ingresar contraseña')
        this.insertPassword(password)
        Logger.subPaso('Dar clic al botón Log In')
        this.clickOnLoginButton()
    }
    static verifyAlertOfUserNotExist(){
        CommonPageMetodos.verifyAlert("Wrong password.")
    }
}
