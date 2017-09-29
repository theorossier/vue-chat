/**
 * Shuffles array in place
 *
 * @param {Array} a The array containing the items.
 */

export default function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}