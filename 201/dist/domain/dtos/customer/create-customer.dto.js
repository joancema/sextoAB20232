"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerDto = void 0;
class CreateCustomerDto {
    constructor(code, name, address, phone, vehicles) {
        this.code = code;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.vehicles = vehicles;
    }
    static create(props) {
        const { code, name, address, phone, vehicle } = props;
        if (!code)
            return ['Code property is required', undefined];
        if (!name)
            return ['Code property is required', undefined];
        if (!address)
            return ['Code property is required', undefined];
        if (!phone)
            return ['Code property is required', undefined];
        return [undefined, new CreateCustomerDto(code, name, address, phone, vehicle)];
    }
}
exports.CreateCustomerDto = CreateCustomerDto;
