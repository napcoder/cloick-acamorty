import { format as executeFormat, isValid } from 'date-fns'
/**
 * Get a string parseable date and return a formatted string using Date-Fns format function. If date is not valid, return empty string.
 */

/**
 * Get a string parseable date and return a formatted string using Date-Fns format function. If date is not valid, return empty string or the string specified by defaultReplacer
 * @param isoDate
 * @param format
 * @param defaultReplacer
 */
export function safeParseAndFormatISODate(
  isoDate: string,
  format: string = 'PPP',
  defaultReplacer: string = ''
) {
  const date = new Date(isoDate)
  if (isoDate && format && isValid(date)) {
    return executeFormat(date, format)
  }
  return defaultReplacer
}
