export class Order {
    constructor(ordId, cusId, products, discount, tot) {
        this._ordId = ordId;
        this._cusId = cusId;
        this._products = products; // array
        this._discount = discount;
        this._tot = tot;
    }

    get ordId() {
        return this._ordId;
    }

    set ordId(value) {
        this._ordId = value;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }

    get products() {
        return this._products;
    }

    set products(value) {
        this._products = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get tot() {
        return this._tot;
    }

    set tot(value) {
        this._tot = value;
    }
}
