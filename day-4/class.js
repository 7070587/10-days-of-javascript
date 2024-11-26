/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  _sideLength;

  constructor(sideLength) {
    this._sideLength = sideLength;
  }

  perimeter() {
    return this._sideLength.reduce((pre, acc) => pre + acc);
  }
}
