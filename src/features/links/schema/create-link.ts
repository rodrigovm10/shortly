import { z } from 'zod'

export const createLinkSchema = z.object({
  shortLink: z.string().min(1, {
    message: 'Short code is required.',
  }),
  originalUrl: z.string().url({
    message: 'Original URL must be a valid URL.',
  }),
  description: z.string().optional(),
})

export type CreateLinkSchema = z.infer<typeof createLinkSchema>
