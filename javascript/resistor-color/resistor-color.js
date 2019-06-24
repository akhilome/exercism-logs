export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const colorCode = (_color = '') => {
  const color = _color.toLowerCase();
  if (COLORS.indexOf(color) < 0) return 'Color code not found';

  return COLORS.indexOf(color);
};
