export class PlaceOrderElementos{
    static get inputForm(){
        return{
            get nombre(){
             return  cy.get('input#name');
            },
            get pais(){
            return cy.get('input#country');
            },
            get ciudad(){
            return cy.get('input#city');
            },
            get card(){
            return cy.get('input#card');
            },
            get mes(){
            return cy.get('input#month');
            },
            get anio(){
            return cy.get('input#year');
            }
        };
    }
    static get botones(){
        return{
            get botonForm(){
            return cy.contains('button', 'Purchase');
            },
            get botonClose(){
            return cy.get('div[id="orderModal"] button').eq(1)
            }
        };
    }
}




