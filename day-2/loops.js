/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowel = s
    .split("")
    .filter(
      (x) => x === "a" || x === "e" || x === "i" || x === "o" || x === "u"
    );
  let consonant = s
    .split("")
    .filter(
      (x) => x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u"
    );
  let all = [...vowel, ...consonant];
  all.forEach((x) => console.log(x));
}
