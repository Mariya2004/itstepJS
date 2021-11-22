class Order {
    client;
    petsitter;
    service;
    pet;
    price;

    constructor (client, petsitter, service, pet, price) {
        this.client = client;
        this.petsitter = petsitter;
        this.service = service;
        this.pet = pet;
        this.price = price;
    }

    create() {

    }
}

export {Order};