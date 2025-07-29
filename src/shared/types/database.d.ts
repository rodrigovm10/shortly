import { Database } from '../../../database.types'

export type Link = Database['public']['Tables']['urls']['Row']
export type Status = Database['public']['Enums']['status']
