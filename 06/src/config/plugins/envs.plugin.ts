import 'dotenv/config';
import * as env from 'env-var';


export const envs = {

  // PORT: env.get('PORT').required().asPortNumber(),


  POSTGRES_URL:env.get('POSTGRES_URL').required().asString(),
  POSTGRES_USER:env.get('POSTGRES_USER').required().asString(),
  POSTGRES_DB: env.get('POSTGRES_DB').required().asString(),
  POSTGRES_PASSWORD:env.get('POSTGRES_PASSWORD').required().asString(),
  
  // Mongo DB
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: env.get('MONGO_USER').required().asString(),
  MONGO_PASS: env.get('MONGO_PASS').required().asString(),

}




