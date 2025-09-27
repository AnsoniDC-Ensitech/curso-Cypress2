import { CommonPageMetodos } from "../common-page/common-page.methods";
import { ProductoDetalleElementos } from "./productoDetalle.elements";

export class ProductoDetalleMetodos{
    static clickOnAddToCart(){
        return ProductoDetalleElementos.botonesDetalle.anadirToCarrito.click({ force: true });
    }

    static VerifyProductDeatilsPagoIsDisplay(){
        ProductoDetalleElementos.botonesDetalle.anadirToCarrito.should('be.visible');
        
    }
    static VerifyProductAddedMessage(){
        CommonPageMetodos.verifyAlert('Product added');
    }
}