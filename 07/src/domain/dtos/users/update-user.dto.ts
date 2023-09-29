

export class UpdateUserDto {

  private constructor(
    public readonly id: number,
    public readonly email?: string,
    public readonly name?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.email ) returnObj.email = this.email;
    if ( this.name ) returnObj.name = this.name;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateUserDto?]  {

    const { id, name, email } = props;
    let newName =name;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !email && !name ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateUserDto(id, email, name)];
  }


}