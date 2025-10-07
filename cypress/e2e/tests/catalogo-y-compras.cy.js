import { CartMetodos } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMetodos } from "../pages/common-page/common-page.methods";
import { HomePageMetodos } from "../pages/homePage/homePage.methodos";
import { LoginData } from "../pages/login/login.data";
import { LoginMethos } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/placeOrder/placeOrder.data";
import { PlaceOrderMetodos } from "../pages/placeOrder/placeOrder.methods";
import { ProductoDetalleMetodos } from "../pages/productoDetalle/productoDetalle.methods";
import { ThankYouForYouPurchaseMetodos } from "../pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";
import { Logger } from "../Util/logger";
const user = LoginData.accesosValidos.username;
const password = LoginData.accesosValidos.password;
const product = "ASUS Full HD"

describe(CommonPageData.testSuites.catalogoYCompra, ()=>{
    it('Navegación por categorías', ()=>{
        Logger.NumPaso(1)
        Logger.Paso('Iniciar sesión como usuario correcto')
        Logger.subPaso('Navegar al sitio')
        CommonPageMetodos.navegar();
        Logger.subPaso('Click a la opción Log In')
        CommonPageMetodos.clickOnLogin();
        Logger.subPaso('Iniciar sesión')
        LoginMethos.iniciarSesion(user,password);
        Logger.subVerificacion(' Verificar que si inicio sesión de manera correcta')
        CommonPageMetodos.verifyThatExistTextLogIn(user);

        Logger.NumPaso(2)
        Logger.Paso('Navegar a la página Inicio')
        CommonPageMetodos.clickOnHome();
        
        Logger.NumPaso(3)
        Logger.Paso('Seleccionar una categoría')
        HomePageMetodos.clickOnMonitorsLinnks();
        Logger.verificacion('Verificar que se muestra la lista de productos a la categoría seleccionada')
        HomePageMetodos.verifyProductsDisplayed('Apple monitor 24');
        HomePageMetodos.verifyProductsDisplayed('ASUS Full HD');

        Logger.postCondicion('Log Out')
        CommonPageMetodos.logOut();

    })

    it('Agregar producto a carrito', ()=>{
        Logger.NumPaso(1)
        Logger.Paso('Iniciar sesión como usuario correcto')
        Logger.subPaso('Navegar al sitio')
        CommonPageMetodos.navegar();
        Logger.subPaso('Click a la opción Log In')
        CommonPageMetodos.clickOnLogin();
        Logger.subPaso('Iniciar sesión')
        LoginMethos.iniciarSesion(user,password);
        // Logger.subVerificacion(' Verificar que si inicio sesión de manera correcta')
        // CommonPageMetodos.verifyThatExistTextLogIn(user);
        // cy.wait(5000);

        Logger.NumPaso(2)
        Logger.Paso('Navegar a la página Inicio')
        CommonPageMetodos.clickOnHome();
        
        Logger.NumPaso(3)
        Logger.Paso('Seleccionar una categoría')
        HomePageMetodos.clickOnMonitorsLinnks();
        
        Logger.NumPaso(4)
        Logger.Paso('Hacer click en un producto especifico')
        HomePageMetodos.clickOnProducts(product);

        Logger.NumPaso(5)
        Logger.verificacion('Verificar que la pantalla sea la misma del producto seleccionado')
        ProductoDetalleMetodos.VerifyProductDeatilsPagoIsDisplay();

        Logger.NumPaso(6)
        Logger.Paso('Hacer clic al boton "Add to Cart"')
        ProductoDetalleMetodos.clickOnAddToCart();

        Logger.NumPaso(7)
        Logger.verificacion('Verificar que se muestra el mensaje de confirmación')
        ProductoDetalleMetodos.VerifyProductAddedMessage();

        Logger.NumPaso(8)
        Logger.Paso('Seleccionar link "Cart" ')
        CommonPageMetodos.clickOnCart();

        Logger.NumPaso(9)
        Logger.verificacion('Verificar que el producto se añadio en el carrito')
        CartMetodos.verifyThatProducsBeVisbleInDisplayCart(product);


        Logger.postCondicion('Limpiar el carrito y cerrar sesión')
        CartMetodos.emptyCart(user,password);
        CommonPageMetodos.logOut();

    })
    it('Realizar una compra', ()=>{
        Logger.NumPaso(1)
        Logger.Paso('Iniciar sesión como usuario correcto')
        Logger.subPaso('Navegar al sitio')
        CommonPageMetodos.navegar();
        Logger.subPaso('Click a la opción Log In')
        CommonPageMetodos.clickOnLogin();
        Logger.subPaso('Iniciar sesión')
        LoginMethos.iniciarSesion(user,password);
        // Logger.subVerificacion(' Verificar que si inicio sesión de manera correcta')
        // CommonPageMetodos.verifyThatExistTextLogIn(user);

        Logger.NumPaso(2)
        Logger.Paso('Navegar a la página Inicio')
        CommonPageMetodos.clickOnHome();
        
        Logger.NumPaso(3)
        Logger.Paso('Seleccionar una categoría')
        HomePageMetodos.clickOnMonitorsLinnks();
        
        Logger.NumPaso(4)
        Logger.Paso('Hacer click en un producto especifico')
        HomePageMetodos.clickOnProducts(product);

        Logger.NumPaso(5)
        Logger.verificacion('Verificar que la pantalla sea la misma del producto seleccionado')
        ProductoDetalleMetodos.VerifyProductDeatilsPagoIsDisplay();

        Logger.NumPaso(6)
        Logger.Paso('Hacer clic al boton "Add to Cart"')
        ProductoDetalleMetodos.clickOnAddToCart();

        Logger.NumPaso(7)
        Logger.verificacion('Verificar que se muestra el mensaje de confirmación')
        ProductoDetalleMetodos.VerifyProductAddedMessage();
        Logger.Paso('Seleccionar link "Cart" ')
        CommonPageMetodos.clickOnCart();
        Logger.verificacion('Verificar que el producto se añadio en el carrito')
        CartMetodos.verifyThatProducsBeVisbleInDisplayCart(product);

        Logger.NumPaso(8)
        Logger.Paso('Dar clic a  link "Cart" de la barra de navegacion ')
         CommonPageMetodos.clickOnCart();

        Logger.NumPaso(9)
        Logger.Paso('Verificar que se muestre la página de compras')
        CartMetodos.VerifyShownBuysPage();

        Logger.NumPaso(10)
        Logger.Paso('Hacer clic al botón Place Order')
        CartMetodos.clickOnButtonPlaceOrder();

        Logger.NumPaso(11)
        Logger.Paso('Completar todos los campos obligatorios del form place order')
        PlaceOrderMetodos.insertarTodosLosValoresEnElFormulario(PlaceOrderData.testDate);

        Logger.NumPaso(12)
        Logger.Paso('Click en el botón Purchase')
        PlaceOrderMetodos.clickOnPlaceOrder();

        Logger.NumPaso(13)
        Logger.Paso('Verificar que se muestre mensaje de conformimación y que se redirige a Home')
        ThankYouForYouPurchaseMetodos.verifyIconOfSucess();
        cy.wait(3000)
        ThankYouForYouPurchaseMetodos.clickOnOK();
        HomePageMetodos.VerifyShownHomePage();

        Logger.postCondicion("LogOut")
        CommonPageMetodos.logOut();

    })
})