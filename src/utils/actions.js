export const action = (type, payload = {}) => ({ type, ...payload });
export const createActionsObject = (base, ...types) => {
  return types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};
