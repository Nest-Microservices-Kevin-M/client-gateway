import 'dotenv/config';
import * as joi from 'joi';

interface IEnvs {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
}

const schema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = schema.validate(process.env);

if (error) {
  throw new Error(error.message);
}

const envs: IEnvs = value;

export { envs };
