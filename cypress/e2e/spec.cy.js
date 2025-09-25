
import { CartMetodos } from "./pages/cart/cart.methods";
import { CommonPageMetodos } from "./pages/common-page/common-page.methods";
import { HomePageMetodos } from "./pages/homePage/homePage.methodos";
import { LoginMethos } from "./pages/login/login.methods"
import { ProductoDetalleMetodos } from "./pages/productoDetalle/productoDetalle.methods";
import { Logger } from "./Util/logger";

describe('Escenarios del portal DemoBlaze', () => {
  it('Inicio de sesión Exitoso', () => {
    const user = 'tesqa10';
    const passw = '12345678';

    Logger.NumPaso(1)
    Logger.Paso('Navegar en el sitio de "Demoblade"')
    CommonPageMetodos.navegar()

    Logger.NumPaso(2)
    Logger.Paso('Dar clic al link "Login"')
    cy.get('a[data-target="#logInModal"]').click()
    //LoginMethos.insertUsername(user)
    //LoginMethos.insertPassword(passw)
    //LoginMethos.clickOnLoginButton()

    Logger.NumPaso(3)
    Logger.Paso(`Iniciar sesión con las credenciales: "${user}/${passw}"`)
    LoginMethos.iniciarSesion(user,passw)
    cy.wait(9000)
    Logger.verificacion(`El Home Page debería mostrar el "Welcome ${user}"`)
    cy.get('a#nameofuser').should('contains.text', user)
  })

  it ('seleccionar producto', ()=>{
    Logger.NumPaso(1)
    Logger.Paso('Navegar en el sitio de "Demoblade"')
    CommonPageMetodos.navegar()

    Logger.NumPaso(2)
    Logger.Paso('Dar clic al link del producto')
    HomePageMetodos.clickOnProducts('Sony xperia z5')
    cy.wait(9000)
  })

  it ('Eliminar Producto', ()=>{
    Logger.NumPaso(1)
    Logger.Paso('Navegar en el sitio de "Demoblade"')
    CommonPageMetodos.navegar()

    Logger.NumPaso(2)
    Logger.Paso('Dar clic al link del producto')
    HomePageMetodos.clickOnProducts('Sony xperia z5')

    Logger.NumPaso(3)
    Logger.Paso('Dar clic al botón para añadir al carrito')
    ProductoDetalleMetodos.clickOnAddToCart()
    CartMetodos.clickMenuBarra('Cart')

    Logger.NumPaso(4)
    Logger.Paso('Eliminar el producto seleccionado')
    CartMetodos.clickOnDeleteButton('Sony xperia z5')
    cy.wait(9000)
  })
})