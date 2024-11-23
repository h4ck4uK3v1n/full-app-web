import { z } from 'zod'

interface IEnvs {
    API_BASE_URL: string
    PORT: string
}

const envSchema = z.object({
    API_BASE_URL: z.string().default('http://app-express:3000/api'),
    PORT: z.string().default('3000')
})

const { error, data } = envSchema.safeParse(process.env);

if (error) {
    throw new Error(`Env validation error: ${error.message}`)
}

console.log('Env:', data);
export const envs = data as IEnvs;