import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMetodos } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethos } from "../pages/login/login.methods";
import { Logger } from "../Util/logger";

describe(CommonPageData.testSuites.Autentificacion, ()=>{
it ('INICIO DE SESIÓN VÁLIDO', ()=>{
    Logger.NumPaso(1)
    Logger.Paso('Navegar a la pagina de inicio')
    CommonPageMetodos.navegar();
    
    Logger.NumPaso(2)
    Logger.Paso('Click en la barra de navegacion "Log In"')
    CommonPageMetodos.clickOnLogin();

    Logger.NumPaso(3)
    Logger.Paso('Ingresar un nombre y contraseña váildos')
    LoginMethos.insertUsername(LoginData.accesosValidos.username);
    LoginMethos.insertPassword(LoginData.accesosValidos.password);

    Logger.NumPaso(4)
    Logger.Paso('Dar clic al botón "Log In"')
    LoginMethos.clickOnLoginButton();
    Logger.verificacion(`Verificar que se muestra el texto Welcome "${LoginData.accesosValidos.username}"`)
    CommonPageMetodos.verifyThatExistTextLogIn(LoginData.accesosValidos.username);
    cy.wait(9000)

})

it ('INICIO DE SESIÓN INVÁLIDO', ()=>{
    Logger.NumPaso(1)
    Logger.Paso('Navegar a la pagina de inicio')
    CommonPageMetodos.navegar();
    
    Logger.NumPaso(2)
    Logger.Paso('Click en la barra de navegacion "Log In"')
    CommonPageMetodos.clickOnLogin();

    Logger.NumPaso(3)
    Logger.Paso('Ingresar un nombre y contraseña inváildos')
    LoginMethos.insertUsername(LoginData.invalidcredencials.username);
    LoginMethos.insertPassword(LoginData.invalidcredencials.password);

    Logger.NumPaso(4)
    Logger.Paso('Dar clic al botón "Log In"')
    LoginMethos.clickOnLoginButton();
    Logger.verificacion(`Verificar que se muestra mensaje de error:"User does not exist."`)
    LoginMethos.verifyAlertOfUserNotExist();
    cy.wait(9000)

})
})