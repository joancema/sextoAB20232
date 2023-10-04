import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const postgresCreate = async  ()=>{
    
    const user = await prisma.userModel.create({
        data: {
          name: 'Prueba',
          email: 'prueba@prisma.io',
          options: {
            create: { title: 'Prueba',
            active: true
             },
          },
          }
      })
      console.log(user)
    // const options = await prisma.optionsModel.create({
    //     data: {
    //       title:'test',
    //       active: true,
    //       userId: user.id
    //     }
    // })
}
const postgresUpdate = async  ()=>{
  const updated = await prisma.userModel.update({
    where: { id: 2 },
    data: { email: 'master@hotmail.com' },
  })
  console.log(updated)
}
const postgresDelete = async  ()=>{
  const deletedOptions= await prisma.optionsModel.deleteMany({
    where: { userId: 1 },
  })
  const deleted = await prisma.userModel.delete({
    where: { id: 1 },
  })
  console.log(deleted)
}
const postgresQuery = async  ()=>{
    const dbLogs = await prisma.userModel.findMany({
        // where: { email: ''}
      });
      console.log(dbLogs);
}




(async ()=>{
    
    // await postgresCreate();
    // await postgresUpdate(); 
    // await postgresDelete();
    await postgresQuery();
})()
