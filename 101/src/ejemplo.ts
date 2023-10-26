import { IComputer, IPart } from './IEjemplo'


const computers: IComputer[] = [{
    number: 1,
    name: 'Computer',
    price: 1000,
    description: 'A computer',
    parts: [
        {
            number: 1,
            name: 'Part 1',
            price: 100,
            description: 'A part',
            computerId: 1
        },
        {
            number: 2,
            name: 'Part 2',
            price: 200,
            description: 'Another part',
            computerId: 1
        }
    ]
},
{
    number: 1,
    name: 'Computer',
    price: 1000,
    description: 'A computer',
    parts: [
        {
            number: 1,
            name: 'Part 1',
            price: 100,
            description: 'A part',
            computerId: 1
        },
        {
            number: 2,
            name: 'Part 2',
            price: 200,
            description: 'Another part',
            computerId: 1
        }
    ]
}
]

const findComputerById = (id: number, computersParam:IComputer[]): IComputer | undefined => {


    // const computersx = computers.filter(
    //      (computer:IComputer) => { return computer.price > 200}
    // )
    // computersx.forEach((computer:IComputer) => {
    //     console.log(computer)
    // })




    const computer= computers.find(
        (computer:IComputer) => { return computer.number === id}
    )

    
    // return (2 === "2")
    if (computer) {
        return computer
    }
    else {
        throw new Error('Computer not found')
    } 
}