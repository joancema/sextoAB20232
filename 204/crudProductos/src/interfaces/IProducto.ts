// Generated by https://quicktype.io

export interface IResProducto {
    sum:     number;
    products: Producto[];
}

export interface Producto {
    _id?:    string;
    name: string;
    status?: boolean;
    price: number;
    cost:  number;
    minimum: number;
    category?:  number;
    __v?:    number;
}