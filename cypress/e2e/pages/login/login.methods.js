import { use } from "react";
import { LoginElements } from "./login.elements";

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
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}
