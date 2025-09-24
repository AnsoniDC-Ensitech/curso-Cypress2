export class HomePageElementos{
    static get categoriasMenu (){
        return {
            get phone(){
                return cy.contains('a', 'Phones')
            },
            get laptops(){
               return cy.contains('a', 'Laptops')
            },
            get monitor(){
                return cy.contains('a', 'Monitors')
            }
        }
    }
     //selector dinamico
    static producto(productName){
        return cy.contains('a',productName)
    }
}