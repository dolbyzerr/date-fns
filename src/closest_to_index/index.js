var parse = require('../parse')

/**
 * @category Common Helpers
 * @summary Return an index of closest date from array comparing to given date.
 *
 * @description
 * Return an index of closest date from array comparing to given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} index of the date closest to the given date
 * @throws {TypeError} second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 October 2015
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [new Date(2015, 0, 1), new Date(2016, 0, 1), new Date(2017, 0, 1)]
 * var result = closestToIndex(dateToCompare, datesArray)
 * //=> 1
 */
function closestToIndex (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestToIndex
