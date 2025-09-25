import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMetodos } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMetodos } from "../pages/signup/signup.methods";
import { Logger } from "../Util/logger";

const user = CommonPageMetodos.generateRandomString();
const password = CommonPageMetodos.generateRandomString(7);
const userExistente = LoginData.accesosValidos.username;

describe(CommonPageData.testSuites.registro,()=>{
    it ('Registro de usuario válido', ()=>{
        Logger.NumPaso(1)
        Logger.Paso('Navegar a la página de Inicio')
        CommonPageMetodos.navegar();

        Logger.NumPaso(2)
        Logger.Paso('Hacer clic en "Sign Up" en la barra de navegación')
        CommonPageMetodos.clickOnSignUp();

        Logger.NumPaso(3)
        Logger.Paso('Completar todos los campos obligatorios con información válida')
        SignupMetodos.insertarNombreUsuario(user)
        SignupMetodos.insertarContasenaUsuario(password)

        Logger.NumPaso(4)
        Logger.Paso('Hacer click a "Sign up" para registrar el usuario')
        SignupMetodos.clickOnBoton();
        Logger.verificacion('Verificar que se muestre el mensaje "Sign up sucessful"')
        SignupMetodos.verifySignUpSucessfulMessageIsDisplay();
    })

    it ('Registro de usuario inválido', ()=>{
        Logger.NumPaso(1)
        Logger.Paso('Navegar a la página de Inicio')
        CommonPageMetodos.navegar();

        Logger.NumPaso(2)
        Logger.Paso('Hacer clic en "Sign Up" en la barra de navegación')
        CommonPageMetodos.clickOnSignUp();

        Logger.NumPaso(3)
        Logger.Paso('Completar todos los campos obligatorios con información inválida')
        SignupMetodos.insertarNombreUsuario(userExistente)
        SignupMetodos.insertarContasenaUsuario(password)

        Logger.NumPaso(4)
        Logger.Paso('Hacer click a "Sign up" para registrar el usuario')
        SignupMetodos.clickOnBoton();
        Logger.verificacion('Verificar que se muestre el mensaje "Sign up sucessful"')
        SignupMetodos.verifySignUpFailedfulMessageIsDisplay();
        cy.wait(9000)
    })
})