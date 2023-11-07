"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./customer/routes");
const routes_2 = require("./vehicle/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/customers', routes_1.CustomerRoutes.routes);
        router.use('/api/vehicles', routes_2.VehicleRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
