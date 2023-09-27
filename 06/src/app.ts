import { envs } from './config/plugins/envs.plugin';
import { PrismaClient } from '@prisma/client';
import { LogModel, OptionModel, UserModel } from './data/mongo/models';
import { MongoDatabase } from './data/mongo';

const prismaClient = new PrismaClient();


const postgresCreate = async  ()=>{
    // const newLog = await prismaClient.logModel.create({
    //     data: {
    //       message: "Test",
    //       origin: "Test",
    //       level: "HIGH",
    //     }
    //   });  
    const user = await prismaClient.userModel.create({
        data: {
          name: 'Alice',
          email: 'alice3@prisma.io',
        },
      })
      console.log(user)
      const options = await prismaClient.optionsModel.create({
        data: {
          title:'test',
          active: true,
          userId: user.id
        }
    })
}
const postgresQuery = async  ()=>{
    const dbLogs = await prismaClient.logModel.findMany({
        where: { level: "HIGH" }
      });
      console.log(dbLogs);
}
const mongoCreate=async ()=>{
    // const newLog = await LogModel.create(
    //     { createdAt: new Date(),
    //      message: "Test",
    //      origin: "Test",
    //       level: "high" }
    //     );
    // console.log('Mongo Log created:', newLog.id ); 
    const newUser =  await UserModel.create({
        email: 'joancemac@gmail.com',
        name: 'Joan',
    })
    console.log('Mongo User created:', newUser.id );
    const newOption =  await OptionModel.create({
        title: 'Test',
        user: newUser.id,
    })
}
const mongoQuery=async ()=>{
    const dbLogs = await LogModel.find({level: "high"});
    console.log(dbLogs);
}
(async ()=>{
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
      });
    // await postgresCreate();
    // await postgresQuery();
    await mongoCreate();
    // await mongoQuery();
})()

