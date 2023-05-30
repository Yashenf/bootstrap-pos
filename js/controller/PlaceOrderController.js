import {CustomerController} from "./CustomerController.js";

export class PlaceOrderController {
    constructor() {
        const customerController= new CustomerController();
            $('#PO_CusId').on('keyup', (e) => {
                if (e.keyCode === 13) {
                    const customer =
                        customerController.customers[customerController.findIndexFromCustomerId
                        (e.target.value)];
                    $('#PO_CusName').val(customer._name);
                }
            });
    }
}

const placeOrderController = new PlaceOrderController();