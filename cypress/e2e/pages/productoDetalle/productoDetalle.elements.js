export class ProductoDetalleElementos{
    static get botonesDetalle(){
        return{
            get anadirToCarrito(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }
}
