export class Triangle {
  constructor() {
    this.sides = [...arguments];
  }

  kind() {
    const validNums = this.sides
      .filter(e => /\d/.test(e) && e > 0)
      .sort((a, b) => a - b);
    const invalidChecks = new Set([
      validNums.length !== 3,
      validNums[0] + validNums[1] < validNums[2]
    ]);

    if (invalidChecks.has(true)) throw new Error('invalid triangle');

    const threeEql =
      validNums[0] === validNums[1] && validNums[0] === validNums[2];

    const twoEql =
      !threeEql &&
      (validNums[0] === validNums[1] ||
        validNums[0] === validNums[2] ||
        validNums[1] === validNums[2]);

    return threeEql ? 'equilateral' : twoEql ? 'isosceles' : 'scalene';
  }
}
