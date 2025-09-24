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
    static insertarMes(mounth){
        PlaceOrderElementos.inputForm.mes.invoke("val", mounth);
    }
    static insertarAnio(year){
        PlaceOrderElementos.inputForm.anio.invoke("val", year);
    }
    static clickOnCloseForm(){
        PlaceOrderElementos.botones.botonClose.click();
    }

    static clickOnPlaceOrder(){
        PlaceOrderElementos.botones.botonForm.click();
    }
    

}