import { CommonPageMetodos } from "../common-page/common-page.methods";
import { SignupElementos } from "./signup.elements";

export class SignupMetodos{
    static insertarNombreUsuario(username){
        SignupElementos.inputSignups.username.invoke("val",username);
    }
    static insertarContasenaUsuario(password){
        SignupElementos.inputSignups.password.invoke("val",password);
    }
    static clickOnBoton(){
      return  SignupElementos.botones.botonSignup.click();
    }

    static registro(username,pasword){
        this.insertarNombreUsuario(username);
        this.insertarContasenaUsuario(pasword);
        this.clickOnBoton();
    }
    static verifySignUpSucessfulMessageIsDisplay(){
        CommonPageMetodos.verifyAlert("Sign up successful.");
    }

     static verifySignUpFailedfulMessageIsDisplay(){
        CommonPageMetodos.verifyAlert("This user already exist.");
    }
    
}