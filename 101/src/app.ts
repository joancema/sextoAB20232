// import { envs } from './config/plugins/envs.plugin'
import {PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const createUser= async ()=>{

    const user = await prisma.user.create({
        data:{
            name:'test',
            email:'prueba6@gmail.com',
            options:{
                create:{
                    title:'test'
                }
            }
        }
    })
    console.log(user);
    
    // const option = await prisma.option.create({
    //     data:{
    //         title:'test',
    //         userId:user.id
    //     }
    // })
    // console.log(option);
}
const queryUser = async ()=>{
    const users = await prisma.user.findMany({
        where:{
             email:''
        }
    })
    console.log(users);

}
const updateUser =  async ()=>{
    const user = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:'test2'
        }
    })
    console.log(user);
    
}
const deleteUser= async ()=>{
    const user = await prisma.user.delete({
        where:{
            id:1,
            email:''
        }
    })
    console.log(user);
    
}

(async ()=>{
    // await createUser();
    // await queryUser();
    // await updateUser();
    // await deleteUser();

})()


