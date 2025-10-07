import { CommonPageData } from "./common-page.data";
import { CommonPageElementos } from "./common-page.elements";

export class CommonPageMetodos{
    static navegar(){
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
        CommonPageMetodos.clickOnHome();
    }

    static clickOnHome(){
        CommonPageElementos.BarraMenu.BarraHome.click({ force: true });
    }

    static clickOnContact(){
        CommonPageElementos.BarraMenu.BarraContact.click({ force: true });
    }
    static clickOnAboutUs(){
        CommonPageElementos.BarraMenu.BarraAboutUS.click({ force: true });
    }
    static clickOnCart(){
        CommonPageElementos.BarraMenu.BarraCart.click({ force: true });
        Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
    });
    }
    static clickOnLogin(){
        CommonPageElementos.BarraMenu.BarraLogIn.click({ force: true });
    }
    static clickOnSignUp(){
        CommonPageElementos.BarraMenu.BarraSignUp.click({ force: true });
    }
    //para verificar las alertas 
    static verifyAlert(expectedMessage){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(expectedMessage)
        })
    }

    //Generar string random
    static generateRandomString(length = 10){
       let result = "";
       const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
       const charactersLength = characters.length;
       let counter = 0;
       while (counter < length){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
       }
       return result;
    }

    static verifyThatExistTextLogIn(username){
        CommonPageElementos.UsuarioLogueado.should("have.text",`Welcome ${username}`);
    }

    //método para salir de sesión y el usuario esta logueado
    static logOut(){
        cy.get ('body').then($body=>{
            if($body.find('#logout2[style="display: block;"]').length>0){
                 CommonPageElementos.BarraMenu.BarraLogOut.click
            }
        });
    }
}