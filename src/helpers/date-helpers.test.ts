import { safeParseAndFormatISODate } from './date-helpers'

describe('Date Helpers', () => {
  describe('safeParseAndFormatISODate', () => {
    it('should return empty string for invalid date', () => {
      expect(safeParseAndFormatISODate('asd', 'PPP')).toEqual('')
    })
    it('should return empty string for empty date input', () => {
      expect(safeParseAndFormatISODate('', 'PPP')).toEqual('')
    })
    it('should return empty string for empty format input', () => {
      expect(safeParseAndFormatISODate(new Date().toISOString(), '')).toEqual('')
    })
    it('should return correct string representation', () => {
      expect(safeParseAndFormatISODate(new Date(2014, 1, 11).toISOString(), 'MM/dd/yyyy')).toEqual(
        '02/11/2014'
      )
    })

    it('should use PPP format when no format parameter sent', () => {
      expect(safeParseAndFormatISODate(new Date(2014, 1, 11).toISOString())).toEqual(
        'February 11th, 2014'
      )
    })
    it('should return the specified replacer fro invalid date', () => {
      expect(safeParseAndFormatISODate('asd', 'PPP', 'n.a.')).toEqual('n.a.')
    })
  })
})
