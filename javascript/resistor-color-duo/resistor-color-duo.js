export const value = colors => {
  const [col1, col2] = colors.map(color => color.toLowerCase());
  if (!colorMap.has(col1) || !colorMap.has(col2))
    throw new Error('Invalid color');
  return Number(`${colorMap.get(col1)}${colorMap.get(col2)}`);
};

const colorMap = new Map(
  Object.entries({
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  })
);
