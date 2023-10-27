export class UpdateVehicleDto {

    private constructor(
      public readonly id: number,
      public readonly code?: string,
      public readonly detail?: string,
      public readonly customerId?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.code ) returnObj.code = this.code;
      if ( this.detail ) returnObj.detail = this.detail;
      if ( this.customerId ) returnObj.customerId = this.customerId;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateVehicleDto?]  {
  
      const { id, code, detail, customerId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !code && !detail && !customerId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateVehicleDto(id, code, detail, customerId)];
    }
  
  
  }