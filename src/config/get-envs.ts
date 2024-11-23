import { z } from 'zod'

interface IEnvs {
    NEXT_PUBLIC_API_BASE_URL: string
    PORT: string
}

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().default('http://localhost:3000'),
    PORT: z.string().default('3000')
})

const { error, data } = envSchema.safeParse(process.env);

if (error) {
    throw new Error(`Env validation error: ${error.message}`)
}

console.log('Env:', data);
export const envs = data as IEnvs;