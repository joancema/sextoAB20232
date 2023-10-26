import {PrismaClient } from '@prisma/client'
import { create } from 'domain';

const prisma = new PrismaClient();


const createEntitiesDatabase = async () => {
    const computerCreated =   await prisma.computer.create({
        data: {
            name: 'Computer 1',
            description: 'Computer 1 description',
            price: 1000,
        }
    })
    const partCreated = await  prisma.part.create({
        data: {
            name: 'Part 1',
            description: 'Part 1 description',
            price: 100,
            computerId: computerCreated.number
        }
    })
}

// await createEntitiesDatabase();



// createEntitiesDatabase()
//     .then(()=>{
//         console.log('Database created')
//         prisma.$disconnect()
//     })
//     .catch((error)=>{
//         console.log(error)
//         prisma.$disconnect()
//     })

// (async ()=>{
//     await createEntitiesDatabase()
//     console.log('Database created')
//     prisma.$disconnect()
// })()