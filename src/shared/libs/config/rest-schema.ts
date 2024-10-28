import convict from 'convict';
import validator from 'convict-format-with-validator';
convict.addFormats(validator);

import { IRestSchema } from './types/rest-schema.interface.js';

export const configRestSchema = convict<IRestSchema>({
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: null
  },
  DB_HOST: {
    doc: 'IP address of the database server (MongoDB)',
    format: String,
    env: 'DB_HOST',
    default: '127.0.0.1'
  },
  DB_NAME: {
    doc: 'Database name (MongoDB)',
    format: String,
    env: 'DB_NAME',
    default: 'six-cities'
  },
  DB_USERNAME: {
    doc: 'Username to connect to the database',
    format: String,
    env: 'DB_USERNAME',
    default: null,
  },
  DB_PASSWORD: {
    doc: 'Password to connect to the database',
    format: String,
    env: 'DB_PASSWORD',
    default: null,
  },
  DB_PORT: {
    doc: 'Port to connect to the database (MongoDB)',
    format: 'port',
    env: 'DB_PORT',
    default: '27017',
  },
});
