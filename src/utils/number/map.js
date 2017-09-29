/**
 * Re-maps a number from one range to another
 *
 * @param  {number} value  The incoming value to be converted
 * @param  {number} start1 Lower bound of the value's current range
 * @param  {number} stop1  Upper bound of the value's current range
 * @param  {number} start2 Lower bound of the value's target range
 * @param  {number} stop2  Upper bound of the value's target range
 * @return {number}        Remapped number
 */

export default function map (num, min1, max1, min2, max2) {
  let num1 = (num - min1) / (max1 - min1)
  let num2 = (num1 * (max2 - min2)) + min2

  return Math.round(num2)
}
