export class ThankYouForYouPurchaseElementos{
    static get butttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK');
            }
        };
    }
    static get icons(){
        return{
            get greenCheckMark(){
            return cy.get('div.sa-placeholder');
            }
        };
    }
}