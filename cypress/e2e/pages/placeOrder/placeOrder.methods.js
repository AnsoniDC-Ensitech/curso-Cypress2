import { PlaceOrderElementos } from "./PlaceOrder.elements";

export class PlaceOrderMetodos{
    static insertarNombre(name){
        PlaceOrderElementos.inputForm.nombre.invoke("val", name);
    }
    static insertarPais(country){
        PlaceOrderElementos.inputForm.pais.invoke("val", country);
    }
    static insertarCiudad(city){
        PlaceOrderElementos.inputForm.ciudad.invoke("val", city);
    }
    static insertarTarjeta(card){
        PlaceOrderElementos.inputForm.card.invoke("val", card);
    }
    static insertarMes(month){
        PlaceOrderElementos.inputForm.mes.invoke("val", month);
    }
    static insertarAnio(year){
        PlaceOrderElementos.inputForm.anio.invoke("val", year);
    }
    static clickOnCloseForm(){
        PlaceOrderElementos.botones.botonClose.click({ force: true });
    }

    static clickOnPlaceOrder(){
        PlaceOrderElementos.botones.botonForm.click({ force: true });
    }
    
    static insertarTodosLosValoresEnElFormulario(data){

        this.insertarNombre(data.name)
        this.insertarPais(data.country)
        this.insertarCiudad(data.city)
        this.insertarTarjeta(data.card)
        this.insertarMes(data.month)
        this.insertarAnio(data.year)
    }

}