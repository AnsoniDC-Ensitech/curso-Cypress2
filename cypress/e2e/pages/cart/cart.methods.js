import { CartElementos } from "./cart.elements";

export class CartMetodos{
    static clickOnDeleteButton(productName){
        return CartElementos.links.detele(productName).click();
    }
    static clickMenuBarra(nomBarra){
        return CartElementos.barradeNavegacion.Navegar(nomBarra).click();
    }

    static verifyThatProducsBeVisbleInDisplayCart(prodcutName){
        CartElementos.links.detele(prodcutName).should('be.visible');
    }
}