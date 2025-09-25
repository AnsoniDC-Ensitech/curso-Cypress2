export class Logger{
    // logger el numero del paso
    static NumPaso(number){
        const text = `Paso # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }
    //Loguear descripicion de un paso
     static Paso(description){
        const text = `Descripcion - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
//Loguear verificacion de un paso
     static verificacion(description){
        const text = `Verificación - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    //Loguear verificacion de un paso
     static subPaso(description){
        const text = `Sub-paso - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    //Loguear Sub-verificacion de un paso
     static subVerificacion(description){
        const text = `Sub-Verificacion - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

}