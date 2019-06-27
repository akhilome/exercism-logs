export class Crypto {
  constructor(text = '') {
    this.text = text;
    this.r = 0;
    this.c = 0;
  }

  /**
   * @returns {string}
   */
  normalizePlaintext() {
    this.text = this.text.replace(/[^\w]/gi, '').toLowerCase();
    return this.text;
  }

  /**
   * @returns {number}
   */
  size() {
    const strLen = this.normalizePlaintext().length;
    const sqrt = Math.sqrt(strLen);
    this.c = Math.ceil(sqrt);
    this.r = Math.round(sqrt / this.c);
    return this.r * this.c;
  }

  /**
   * @returns {string[]}
   */
  plaintextSegments() {
    const size = this.size();
    const textSegs = [];
    let cur = 0;

    for (let i = 0; i < Math.ceil(this.text.length / size); i++) {
      const nextCur = cur + size;
      textSegs.push(this.text.substring(cur, nextCur));
      cur = nextCur;
    }
    return textSegs;
  }

  /**
   * @returns {string}
   */
  ciphertext() {
    const ats = this.plaintextSegments().map(el => el.split(''));
    const t = a => Object.keys(a[0]).map(c => a.map(r => r[c]));
    return t(ats)
      .map(arr => arr.filter(el => el !== undefined))
      .map(el => el.join(''))
      .join('');
  }
}
