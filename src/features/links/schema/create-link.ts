import { z } from 'zod'

export const createLinkSchema = z.object({
  originalUrl: z.string().url({
    message: 'Original URL must be a valid URL.',
  }),
  description: z.string().optional(),
})

export type CreateLinkSchema = z.infer<typeof createLinkSchema>
