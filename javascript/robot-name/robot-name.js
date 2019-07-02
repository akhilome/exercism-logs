export class Robot {
  constructor() {
    this[Symbol.for('previousNames')] = new Map();
    this[Symbol.for('name')] = this.generateName();
  }

  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getRandomAlpha() {
    const alphas = Object.keys(Array(26).fill(null)).map(e =>
      String.fromCharCode(Number(e) + 65)
    );
    return [
      alphas[this.getRandomNumber(0, 25)],
      alphas[this.getRandomNumber(0, 25)]
    ].join('');
  }

  generateName() {
    return `${this.getRandomAlpha()}${this.getRandomNumber(100, 999)}`;
  }

  reset() {
    let name = this.generateName();
    while (this[Symbol.for('previousNames')].get(name))
      name = this.generateName();
    this[Symbol.for('name')] = name;
    this[Symbol.for('previousNames')].set(name, 1);
  }

  get name() {
    return this[Symbol.for('name')];
  }
}

Robot.releaseNames = () => undefined;
