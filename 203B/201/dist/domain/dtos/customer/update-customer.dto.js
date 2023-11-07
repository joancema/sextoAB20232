"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerDto = void 0;
class UpdateCustomerDto {
    constructor(id, code, name, address, phone, vehicles) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.vehicles = vehicles;
    }
    get values() {
        const returnObj = {};
        if (this.code)
            returnObj.code = this.code;
        if (this.name)
            returnObj.name = this.name;
        if (this.address)
            returnObj.address = this.address;
        if (this.phone)
            returnObj.phone = this.phone;
        if (this.vehicles)
            returnObj.vehicles = this.vehicles;
        return returnObj;
    }
    static create(props) {
        const { id, code, name, address, phone, vehicles } = props;
        let newName = name;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!code && !name && !address && !phone && !vehicles) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCustomerDto(id, code, name, address, phone, vehicles)];
    }
}
exports.UpdateCustomerDto = UpdateCustomerDto;
