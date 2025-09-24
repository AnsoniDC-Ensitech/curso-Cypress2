export class SignupElementos{
    static get inputSignups(){
        return {
            get username(){
                return cy.get('input#sign-username')
            },
            get password(){
                return cy.get('input#sign-password')
            }
        }
    }
    static get botones(){
        return{
            get botonSignup(){
                return cy.contains('button', 'Sign up')
            }
        }
    }
}