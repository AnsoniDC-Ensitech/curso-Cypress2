import { ThankYouForYouPurchaseElementos } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYouPurchaseMetodos{
    static clickOnOK(){
        ThankYouForYouPurchaseElementos.butttons.ok.click({ force: true });
    }

    static verifyIconOfSucess(){
        ThankYouForYouPurchaseElementos.icons.greenCheckMark.should("exist");
    }
}