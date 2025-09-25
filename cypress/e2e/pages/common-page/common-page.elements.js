export class CommonPageElementos{
   static get BarraMenu(){
    return{
        get BarraHome(){
            return cy.contains("a", "Home");
        },
        get BarraContact(){
            return cy.contains("a", "Contact");
        },
        get BarraAboutUS(){
            return cy.contains("a", "About us");
        },
        get BarraCart(){
            return cy.contains("a", "Cart");
        },
        get BarraLogIn(){
            return cy.contains("a", "Log in");
        },
        get BarraSignUp(){
            return cy.contains("a", "Sign up");
        },
    };
   }

   static get UsuarioLogueado(){
    return cy.get("a#nameofuser");
   }

}