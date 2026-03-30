let customers = [];
let nextId = 1;

class Customer {
    constructor(name, address, salary) {
        this.id = nextId++;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

    static create(data){
        const customer=new Customer(data.name,data.address,data.salary);
        customers.push(customer);
        return customer
    }

}