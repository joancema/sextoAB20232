export interface IComputer {
    id: number;
    name: string;
    price: number;
    description: string;
    parts: IPart[];
}
export interface IPart {
    id: number;
    name: string;
    price: number;
    description: string;
    computerId: number;
}