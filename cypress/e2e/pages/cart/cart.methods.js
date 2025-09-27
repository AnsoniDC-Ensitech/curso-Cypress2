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
}