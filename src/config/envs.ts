import 'dotenv/config';
import * as joi from 'joi';

interface IEnvs {
  NATS_SERVERS: string[];
  PORT: number;
}

const schema = joi
  .object({
    NATS_SERVERS: joi.array().items(joi.string().required()),
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = schema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(error.message);
}

const envs: IEnvs = value;

export { envs };
