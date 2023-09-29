

export class CreateUserDto {

  private constructor(
    public readonly email: string,
    public readonly name: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateUserDto?]  {

    const { email, name } = props;

    if ( !email ) return ['Email property is required', undefined];


    return [undefined, new CreateUserDto(email, name)];
  }


}