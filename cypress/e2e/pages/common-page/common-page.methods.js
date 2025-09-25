import { CommonPageData } from "./common-page.data";
import { CommonPageElementos } from "./common-page.elements";

export class CommonPageMetodos{
    static navegar(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static clickOnHome(){
        CommonPageElementos.BarraMenu.BarraHome.click();
    }

    static clickOnContact(){
        CommonPageElementos.BarraMenu.BarraContact.click();
    }
    static clickOnAboutUs(){
        CommonPageElementos.BarraMenu.BarraAboutUS.click();
    }
    static clickOnCart(){
        CommonPageElementos.BarraMenu.BarraCart.click();
    }
    static clickOnLogin(){
        CommonPageElementos.BarraMenu.BarraLogIn.click();
    }
    static clickOnSignUp(){
        CommonPageElementos.BarraMenu.BarraSignUp.click();
    }
    //para verificar las alertas 
    static verifyAlert(expectedMessage){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(expectedMessage)
        })
    }

}