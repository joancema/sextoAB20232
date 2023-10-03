import 'dotenv/config'
import * as env from 'env-var';

export const envs = {
    POSTGRES_URL: env.get('POSTGRES_URL').required().asString(),
    PORT: env.get('PORT').required().asPortNumber(),
}



