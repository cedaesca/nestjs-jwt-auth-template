import * as Joi from '@hapi/joi';
import { dbValidationSchema } from './database.config';

export const validationSchema = Joi.object().concat(dbValidationSchema);
