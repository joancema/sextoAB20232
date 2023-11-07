"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class VehicleRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const vehicleController = new controller_1.VehiclesController();
        router.get('/', vehicleController.getVehicles);
        router.get('/:id', vehicleController.getVehicleById);
        router.post('/', vehicleController.createVehicle);
        router.put('/:id', vehicleController.updateVehicle);
        router.delete('/:id', vehicleController.deleteVehicle);
        return router;
    }
}
exports.VehicleRoutes = VehicleRoutes;
