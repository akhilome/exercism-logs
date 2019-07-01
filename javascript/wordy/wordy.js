export const ArgumentError = new Error('Invalid operation');

export class WordProblem {
  constructor(question) {
    this.question = question;
    this.validTokens = ['plus', 'minus', 'multiplied', 'divided'];
  }

  striper(sentence = this.question) {
    return sentence
      .replace('?', '')
      .split(' ')
      .filter(e => this.isValidToken(e));
  }

  doOp(op, values) {
    const performer = {
      plus: (x, y) => x + y,
      minus: (x, y) => x - y,
      divided: (x, y) => x / y,
      multiplied: (x, y) => x * y
    };

    let res;

    if (op.length > 1) {
      let cOp = 0;
      let vaOp = 2;
      for (let i = 0; i < values.length - 1; i++) {
        if (i === 0) {
          res = performer[op[cOp]](Number(values[0]), Number(values[1]));
          cOp++;
        } else {
          res = performer[op[cOp]](res, Number(values[vaOp]));
          cOp++;
          vaOp++;
        }
      }
    }

    if (op.length === 1) {
      res = performer[op](Number(values[0]), Number(values[1]));
    }
    return res;
  }

  isValidToken(char) {
    return this.validTokens.includes(char) || !Number.isNaN(parseInt(char, 10));
  }

  isValidOp(char) {
    return this.validTokens.includes(char);
  }

  prep() {
    const a = this.striper();
    const op = a.filter(e => this.validTokens.includes(e));
    const value = a.filter(e => !this.validTokens.includes(e));

    return [op, value];
  }

  answer() {
    const validTokens = this.striper().filter(el => this.isValidOp(el));
    if (!validTokens.length) throw ArgumentError;
    const [op, values] = this.prep();
    return this.doOp(op, values);
  }
}
