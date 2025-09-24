
import { LoginMethos } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const user = 'tesqa10';
    const passw = '12345678';
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    //LoginMethos.insertUsername(user)
    //LoginMethos.insertPassword(passw)
    //LoginMethos.clickOnLoginButton()
    LoginMethos.iniciarSesion(user,passw)
    cy.wait(9000)
    cy.get('a#nameofuser').should('contains.text', user)
  })
})