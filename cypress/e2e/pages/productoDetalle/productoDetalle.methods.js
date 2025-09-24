import { ProductoDetalleElementos } from "./productoDetalle.elements";

export class ProductoDetalleMetodos{
    static clickOnAddToCart(){
        return ProductoDetalleElementos.botonesDetalle.anadirToCarrito.click();
    }
}