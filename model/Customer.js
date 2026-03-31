let customers = [];
let nextId = 1;

class Customer {
    constructor(name, address, salary) {
        this.id = nextId++;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

    static create(data) {
        const customer = new Customer(data.name, data.address, data.salary);
        customers.push(customer);
        return customer;
    }

    static findAll() {
        return customers;
    }

    static findById(id) {
        return customers.find(c => c.id === id);
    }

    static update(id, data) {
        let selectedCustomer = this.findById(id);
        if (selectedCustomer) {
            selectedCustomer.name = data.name ?? selectedCustomer.name;
            selectedCustomer.address = data.address ?? selectedCustomer.address;
            selectedCustomer.salary = data.salary ?? selectedCustomer.salary;
        }
        return selectedCustomer;
    }

    static delete(id) {
        let selectedIndex = customers.findIndex(c => c.id === id);
        if (selectedIndex !== -1) {
            return customers.splice(selectedIndex, 1)[0];
        }
        return null;
    }
}

module.exports = Customer;