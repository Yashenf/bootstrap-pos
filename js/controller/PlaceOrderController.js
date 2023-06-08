import {CustomerController} from "./CustomerController.js";
import {ProductController} from "./ProductController.js";

export class PlaceOrderController {

    constructor() {
        this.customerController = new CustomerController();
        this.productController = new ProductController();
        $('#PO_CusId').on('keyup', (e) => {
            if (e.keyCode === 13) {
                const customer =
                    this.customerController.customers[this.customerController.findIndexFromCustomerId
                    (e.target.value)];
                $('#PO_CusName').val(customer._name);
            }
        });
        $('#pOproductIdTxt').on('keyup', (e) => {
            if (e.keyCode === 13) {
                const product =
                    this.productController.products[this.productController.findIndexByProductId
                    (e.target.value)];
                $('#pOdescTxt').val(product._desc);
                $('#pOPriceTxt').val(product._price);
                $('#pOqtyOnHandTxt').val(product._qtyOnHand);
            }
        });

        $('#addToCartBtn').on('click', this.addToCart.bind(this));

        //        Create bucket to store shopping cart
        this.shoppingCart = [];
    }

    addToCart() {
        const productIndex = this.productController.findIndexByProductId($('#pOproductIdTxt').val());
        console.log($('#pOproductIdTxt').val());
        console.log($('#pOqtyTxt').val());
        console.log(this.shoppingCart);
        this.shoppingCart.push({
            "product": this.productController.products[productIndex]._pId,
            "qty": Number($('#pOqtyTxt').val())
        });
        this.displayCart();
    }

    deleteFromCart(index) {
        console.log(this.shoppingCart);
        this.shoppingCart.slice(index, 1);
        console.log(this.shoppingCart);
        this.displayCart();
    }

    displayCart() {
        $('#shoppingCartTbl').empty();

        this.shoppingCart.map((result, index) => {

            const removeFromCartBtn = $('<div class="btn btn-danger">remove</div>');
            removeFromCartBtn.on('click', () => {
                this.deleteFromCart(index);
            });
            let no = index + 1;
            $('#shoppingCartTbl').append(
                $('<tr>').append(
                    $('<th scope="row">').text(no),
                    $('<td>').text(this.productController.products[index]._desc),
                    $('<td>').text(result.qty),
                    $('<td>').text(this.productController.products[index]._price * result.qty),
                    $('<td>').append(removeFromCartBtn)
                )
            );

        });
    }
}


const placeOrderController = new PlaceOrderController();

/*
  check qty user enter and is it uneven , show error message.
* create array to store cart.
* store object on array like {product:productId, qty:qty}
*
* */