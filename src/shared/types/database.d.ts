import { Database } from '../../../database.types'

export type Status = Database['public']['Enums']['status']
export type Link = Database['public']['Tables']['urls']['Row']
