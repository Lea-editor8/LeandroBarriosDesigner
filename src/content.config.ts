import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const presupuestos = defineCollection({
  loader: glob({ base: './src/content/presupuestos', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    client: z.string().optional(),
    tipo: z.string().default('Propuesta Técnica y Económica'),
    prestador: z.string().default('Leandro Barrios — Diseñador gráfico y web'),
    precio: z.string(),
    moneda: z.string().default('ARS'),
    incluye: z.string().optional(),
    formaPago: z.string().optional(),
    noindex: z.boolean().default(false),
  }),
})

export const collections = { presupuestos }
