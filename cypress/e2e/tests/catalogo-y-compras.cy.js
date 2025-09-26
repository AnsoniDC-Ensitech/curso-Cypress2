import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMetodos } from "../pages/common-page/common-page.methods";
import { HomePageMetodos } from "../pages/homePage/homePage.methodos";
import { LoginData } from "../pages/login/login.data";
import { LoginMethos } from "../pages/login/login.methods";
import { Logger } from "../Util/logger";
const user = LoginData.accesosValidos.username;
const password = LoginData.accesosValidos.password;

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

    })
})