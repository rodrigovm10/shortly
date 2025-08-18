const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Generate a random short code of given length.
 * Default = 8 characters.
 */
export const generateShortCode = (length = 8): string => {
  let code = ''
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * BASE62.length)
    code += BASE62[rand]
  }
  return code
}
