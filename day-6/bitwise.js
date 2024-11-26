function getMaxLessThanK(n, k) {
  let largest = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let ab = a & b;

      if (ab > largest && ab < k) {
        largest = ab;
      }
    }
  }

  return largest;
}
