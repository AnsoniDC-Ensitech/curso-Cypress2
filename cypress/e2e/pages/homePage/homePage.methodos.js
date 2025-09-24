import { HomePageElementos } from "./homePage.elements";

export class HomePageMetodos{
    static clickOnPhoneLinnks(){
        HomePageElementos.categoriasMenu.phone.click();
    }
    static clickOnLaptosLinnks(){
        HomePageElementos.categoriasMenu.laptops.click();
    }
    static clickOnMonitorsLinnks(){
        HomePageElementos.categoriasMenu.monitor.click();
    }

    static clickOnProducts(produc){
        HomePageElementos.producto(produc).click();
    }
}