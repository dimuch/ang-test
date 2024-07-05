type StrengthItem = {
  [key: string]: any,
  id: string,
  color: string,
}


const randomID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const getStrengthIndicatorParams = (color: string): StrengthItem[] => {
  return Array.from(Array(3))
    .fill({color: color})
    .map(item => ({
      ...item,
      id: randomID(),
    }));
}

export {
  randomID,
  getStrengthIndicatorParams,
}
