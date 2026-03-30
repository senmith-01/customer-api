const Customer = require('../model/Customer');

const getAllCustomers = (req, resp) => { 
    resp.status(200).json(Customer.findAll());    
};
const getCustomerById = (req, resp) => { 
    let selectedCustomer= Customer.findById(parseInt(req.params.id)); 
    if(!selectedCustomer) return resp.status(404).json({message: 'customer not found'});
    resp.status(200).json(selectedCustomer);   
};
const createNewCustomer = (req, resp) => { 
    const {name , address, salary} = req.body;
    let createdCustomer=Customer.create({name,address,salary});
    resp.status(201).json(createdCustomer);
};
const updateCustomer = (req, resp) => { 
    let id=parseInt(req.params.id);
    Customer,update(id,resp.body);
    if(updatedCustomer) return resp.status(404).json({message: 'Customer not found'})
    resp.status(201).json(up)    
};
const deleteCustomer = (req, resp) => { };

module.exports = {
    getAllCustomers, getCustomerById, createNewCustomer, updateCustomer, deleteCustomer
}
