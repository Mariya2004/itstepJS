class Order {
    request;
    driver;
    price = 0;
    date;

    constructor(request, driver, price, date) {
        this.request = request;
        this.driver = driver;
        this.price = price;
        this.date = date;
    }
}
export {Order};