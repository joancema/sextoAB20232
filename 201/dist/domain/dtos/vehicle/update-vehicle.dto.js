"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVehicleDto = void 0;
class UpdateVehicleDto {
    constructor(id, code, detail, customerId) {
        this.id = id;
        this.code = code;
        this.detail = detail;
        this.customerId = customerId;
    }
    get values() {
        const returnObj = {};
        if (this.code)
            returnObj.code = this.code;
        if (this.detail)
            returnObj.detail = this.detail;
        if (this.customerId)
            returnObj.customerId = this.customerId;
        return returnObj;
    }
    static create(props) {
        const { id, code, detail, customerId } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!code && !detail && !customerId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateVehicleDto(id, code, detail, customerId)];
    }
}
exports.UpdateVehicleDto = UpdateVehicleDto;
