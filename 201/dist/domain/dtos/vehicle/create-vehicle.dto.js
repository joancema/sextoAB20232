"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicleDto = void 0;
class CreateVehicleDto {
    constructor(code, detail, customerId) {
        this.code = code;
        this.detail = detail;
        this.customerId = customerId;
    }
    static create(props) {
        const { code, detail, customerId } = props;
        if (!code)
            return ['Code property is required', undefined];
        if (!detail)
            return ['Detail property is required', undefined];
        if (!customerId)
            return ['Id customer property is required', undefined];
        return [undefined, new CreateVehicleDto(code, detail, customerId)];
    }
}
exports.CreateVehicleDto = CreateVehicleDto;
