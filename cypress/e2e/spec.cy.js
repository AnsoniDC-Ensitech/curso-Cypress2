
import { CartMetodos } from "./pages/cart/cart.methods";
import { CommonPageMetodos } from "./pages/common-page/common-page.methods";
import { HomePageMetodos } from "./pages/homePage/homePage.methodos";
import { LoginMethos } from "./pages/login/login.methods"
import { ProductoDetalleMetodos } from "./pages/productoDetalle/productoDetalle.methods";

describe('template spec', () => {
  it('passes', () => {
    const user = 'tesqa10';
    const passw = '12345678';
    CommonPageMetodos.navegar()
    cy.get('a[data-target="#logInModal"]').click()
    //LoginMethos.insertUsername(user)
    //LoginMethos.insertPassword(passw)
    //LoginMethos.clickOnLoginButton()
    LoginMethos.iniciarSesion(user,passw)
    cy.wait(9000)
    cy.get('a#nameofuser').should('contains.text', user)
  })

  it ('seleccionar producto', ()=>{
    CommonPageMetodos.navegar()
    HomePageMetodos.clickOnProducts('Sony xperia z5')
    cy.wait(9000)
  })

  it ('Eliminar Producto', ()=>{
    CommonPageMetodos.navegar()
    HomePageMetodos.clickOnProducts('Sony xperia z5')
    ProductoDetalleMetodos.clickOnAddToCart()
    CartMetodos.clickMenuBarra('Cart')
    CartMetodos.clickOnDeleteButton('Sony xperia z5')
    cy.wait(9000)
  })
})