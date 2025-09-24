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
        LoginElements.buttons.login.click({force:true})
            
    }

    static login1 (username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}
