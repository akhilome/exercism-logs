export class Luhn {
  constructor(number) {
    this[Symbol.for('number')] = number;
    this[Symbol.for('isValid')] = false;
  }

  checkValidTokens() {
    const number = this[Symbol.for('number')].trim();
    const checks = new Set([number.length < 2, /[^\d\s]/gi.test(number)]);
    return checks.has(true) ? false : true;
  }

  checker() {
    if (!this.checkValidTokens()) return;
    const _number = this[Symbol.for('number')];
    const sum = Array.from(_number.replace(/\s/g, ''))
      .reverse()
      .map(Number)
      .map((e, i) => {
        if (i % 2) {
          const double = e * 2;
          return double > 9 ? double - 9 : double;
        }
        return e;
      })
      .reduce((a, b) => a + b);

    sum % 10
      ? (this[Symbol.for('isValid')] = false)
      : (this[Symbol.for('isValid')] = true);
  }

  get valid() {
    this.checker();
    return this[Symbol.for('isValid')];
  }
}
