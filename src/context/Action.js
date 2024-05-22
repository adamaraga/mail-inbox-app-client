export const userFetchSuccess = (user) => ({
  type: "USER_FETCH_SUCCESS",
  payload: user,
});

export const countFetchSuccess = (count) => ({
  type: "COUNT_FETCH_SUCCESS",
  payload: count,
});

export const messagesFetchSuccess = (messsages) => ({
  type: "MESSAGES_FETCH_SUCCESS",
  payload: messsages,
});

export const messageFetchSuccess = (messsage) => ({
  type: "MESSAGE_FETCH_SUCCESS",
  payload: messsage,
});

export const updateReadSuccess = () => ({
  type: "UPDATE_READ_SUCCESS",
});
