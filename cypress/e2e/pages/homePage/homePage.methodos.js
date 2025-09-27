import { HomePageElementos } from "./homePage.elements";

export class HomePageMetodos{
    static clickOnPhoneLinnks(){
        HomePageElementos.categoriasMenu.phone.click({ force: true });
    }
    static clickOnLaptosLinnks(){
        HomePageElementos.categoriasMenu.laptops.click({ force: true });
    }
    static clickOnMonitorsLinnks(){
        HomePageElementos.categoriasMenu.monitor.click({ force: true });
    }

    static clickOnProducts(produc){
        HomePageElementos.producto(produc).click({ force: true });
    }

    static verifyProductsDisplayed(prodcutName){
        HomePageElementos.producto(prodcutName).should('be.visible')
    }

    static VerifyShownHomePage(){
        cy.url().should('include', 'index.html')
    }
}