export class CartElementos{
    static get bottonCart(){
        return{
            get botonParaOrdenar(){
            return  cy.get('button[data-toggle="modal"]')
            }
        }
    }
    static get links(){
        return{
            detele(productName){
             return cy.contains("td",productName).closest('tr').find('a')
            }
        }
    }
    //selector dinamico de la barra de menú
     static get barradeNavegacion(){
        return{
            Navegar(NomBarra){
              return cy.contains('a', NomBarra)
            }
        }
    }
}