/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let result = 0;

  Object.values(objects).forEach((n) => {
    if (n.x === n.y) {
      result++;
    }
  });

  return result;
}
