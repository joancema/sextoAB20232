"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class VehiclesController {
    //* DI
    constructor() {
        this.getVehicles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const vehicles = yield postgres_1.prisma.vehicle.findMany();
            return res.json(vehicles);
        });
        this.getVehicleById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const vehicle = yield postgres_1.prisma.vehicle.findFirst({
                where: { id }
            });
            (vehicle)
                ? res.json(vehicle)
                : res.status(404).json({ error: `Vehicle with id ${id} not found` });
        });
        this.createVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createVehicleDto] = dtos_1.CreateVehicleDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const rest = __rest(createVehicleDto, []);
            const vehicle = yield postgres_1.prisma.vehicle.create({
                data: rest
            });
            res.json(vehicle);
        });
        this.updateVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateVehicleDto] = dtos_1.UpdateVehicleDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const vehicle = yield postgres_1.prisma.vehicle.findFirst({
                where: { id }
            });
            if (!vehicle)
                return res.status(404).json({ error: `Vehicle with id ${id} not found` });
            const updatedVehicle = yield postgres_1.prisma.vehicle.update({
                where: { id },
                data: updateVehicleDto.values
            });
            res.json(updatedVehicle);
        });
        this.deleteVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const vehicle = yield postgres_1.prisma.vehicle.findFirst({
                where: { id }
            });
            if (!vehicle)
                return res.status(404).json({ error: `Vehicle with id ${id} not found` });
            const deleted = yield postgres_1.prisma.vehicle.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Vehicle with id ${id} not found` });
        });
    }
}
exports.VehiclesController = VehiclesController;
