export const temporaryUserAdditions = data => {
  // identify user
  if (!data.facebookId) {
    return data;
  }
  return {
    ...data,
    agregates: {}
  };
};
