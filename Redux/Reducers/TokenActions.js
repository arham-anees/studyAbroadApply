export const addToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});
export const removeToken = () => ({
  type: "SET_TOKEN",
  payload: null,
});
