export class Product {
    constructor(pId, desc, qty) {
        this._pId = pId;
        this._desc = desc;
        this._qtyOnHand = qty;
    }

    get pId() {
        return this._pId;
    }

    set pId(value) {
        this._pId = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get qtyOnHand() {
        return this._qtyOnHand;
    }

    set qtyOnHand(value) {
        this._qtyOnHand = value;
    }
}
