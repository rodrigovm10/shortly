import { z } from 'zod'

export const editLinkSchema = z.object({
  originalUrl: z.string().url({
    message: 'Original URL must be a valid URL.',
  }),
  description: z.string().optional(),
})

export type EditLinkSchema = z.infer<typeof editLinkSchema>
