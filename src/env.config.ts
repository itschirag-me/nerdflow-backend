import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(5000),
  API_PREFIX: Joi.string().default('api'),
  ALLOW_ORIGIN: Joi.string().uri().required(),

  DB_TYPE: Joi.string().valid('postgres', 'mysql').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNCRONIZE: Joi.boolean().default(false),
  DB_LOGGING: Joi.boolean().default(false),

  JWT_SECRET: Joi.string().required(),
  JWT_DURATION: Joi.number().default(86400),
});

export enum Env {
  PORT = 'PORT',
  API_PREFIX = 'API_PREFIX',
  ALLOW_ORIGIN = 'ALLOW_ORIGIN',

  DB_TYPE = 'DB_TYPE',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USER = 'DB_USER',
  DB_PASS = 'DB_PASS',
  DB_NAME = 'DB_NAME',
  DB_SYNCRONIZE = 'DB_SYNCRONIZE',
  DB_LOGGING = 'DB_LOGGING',

  JWT_SECRET = 'JWT_SECRET',
  JWT_DURATION = 'JWT_DURATION',
}
