interface IPolice {
    id: number;
    name: string;
    address: string;
    salary: number;
}


const police: IPolice[] = [
    {
        id: 1,
        name: "John Doe",
        address: "123 Main St",
        salary: 50000
    },
    {
        id: 2,
        name: "Jane Smith",
        address: "456 Oak Ave",
        salary: 60000
    },
    {
        id: 3,
        name: "Bob Johnson",
        address: "789 Elm St",
        salary: 55000
    }
];

police.forEach((officer) => console.log(officer));


