"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CustomerRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const customerController = new controller_1.CustomersController();
        router.get('/', customerController.getCustomers);
        router.get('/:id', customerController.getCustomerById);
        router.post('/', customerController.createCustomer);
        router.put('/:id', customerController.updateCustomer);
        router.delete('/:id', customerController.deleteCustomer);
        return router;
    }
}
exports.CustomerRoutes = CustomerRoutes;
