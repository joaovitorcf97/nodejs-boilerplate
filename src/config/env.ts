import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  JWT_SECRET: z.string().default('secret'),
});

const zodValidateEnv = envSchema.safeParse(process.env);

if (zodValidateEnv.success === false) {
  console.log('❌ Invalid enviroment variables', zodValidateEnv.error.format());

  throw new Error('Invalid enviroment variables');
}

export const env = zodValidateEnv.data;
