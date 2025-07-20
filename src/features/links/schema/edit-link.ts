import { z } from 'zod'

export const editLinkSchema = z.object({
  shortLink: z.string().min(1, {
    message: 'Short code is required.',
  }),
  originalUrl: z.string().url({
    message: 'Original URL must be a valid URL.',
  }),
  description: z.string().optional(),
})

export type EditLinkSchema = z.infer<typeof editLinkSchema>
