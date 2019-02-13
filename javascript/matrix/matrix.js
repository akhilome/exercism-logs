export class Matrix {
  constructor(str = '') {
    const arr = str.split('\n');
    const _rows = arr.length && arr.map(el => el.split(' ').map(Number));
    const _columns = _rows.map((col, i) => _rows.map(row => row[i]));
    this.rows = [..._rows];
    this.columns = [..._columns];
  }
}
