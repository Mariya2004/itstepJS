class Order {
    client;
    driver;
    comfort;
    price;

    constructor (client, driver, comfort, price) {
        this.client = client;
        this.driver = driver;
        this.comfort = comfort;
        this.price = price;
    }

}

export {Order};