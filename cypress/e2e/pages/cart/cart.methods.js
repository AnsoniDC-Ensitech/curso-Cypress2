import { Logger } from "../../Util/logger";
import { CommonPageMetodos } from "../common-page/common-page.methods";
import { LoginMethos } from "../login/login.methods";
import { CartElementos } from "./cart.elements";

export class CartMetodos{
    static clickOnDeleteButton(productName){
        return CartElementos.links.detele(productName).click({ force: true });
    }
    static clickMenuBarra(nomBarra){
        return CartElementos.barradeNavegacion.Navegar(nomBarra).click({ force: true });
    }

    static verifyThatProducsBeVisbleInDisplayCart(prodcutName){
        CartElementos.links.detele(prodcutName).should('be.visible');
    }
    //método para verificar la url de una página
    static VerifyShownBuysPage(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnButtonPlaceOrder(){
        CartElementos.bottonCart.botonParaOrdenar.click({ force: true });
    }
    //Seleccionar todos los elementos del carrito y eliminarlos
    static deleteProducts(){
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="deleteItem"]').each($link=>{ //recorre cada elemento encontrado.
            cy.wrap($link).click({ force: true }); //da clic en cada uno, aunque esté parcialmente oculto o haya animaciones.
            //link.click()
            cy.wait('@deleteItem')
        });
    }
    

    static emptyCart(username, password){
        Logger.subPaso('navegar al sitio DemoBlaze')
        CommonPageMetodos.navegar();
        Logger.subPaso('Cierra sesión, si esta logueado')
        CommonPageMetodos.logOut();
        Logger.subPaso('Click en el link Home')
        CommonPageMetodos.clickOnHome();
        Logger.subPaso('Click en el link Log In')
        CommonPageMetodos.clickOnLogin();
        Logger.subPaso(`Iniciar sesión con las credenciales ${username}/${password}`)
        LoginMethos.iniciarSesion(username,password);
        Logger.subPaso('Click en el link Cart')
        CommonPageMetodos.clickOnCart();
        Logger.subPaso('Seleccionar los productos y eliminarlos')
        this.deleteProducts();
    }
}