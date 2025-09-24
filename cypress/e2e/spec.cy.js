import { LoginElements } from "./pages/login/login.elements"
import { LoginMethos } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethos.login('username','password')
    cy.wait(5000)
  })
})