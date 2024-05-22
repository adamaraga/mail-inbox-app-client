const Reducer = (state, action) => {
  switch (action.type) {
    case "USER_FETCH_SUCCESS":
      return {
        user: action.payload,
        messagesCount: null,
        messages: null,
        message: null,
      };

    case "COUNT_FETCH_SUCCESS":
      return {
        user: state.user,
        messagesCount: action.payload,
        messages: state.messages,
        message: state.message,
      };

    case "MESSAGES_FETCH_SUCCESS":
      return {
        user: state.user,
        messagesCount: state.messagesCount,
        messages: action.payload,
        message: state.message,
      };

    case "MESSAGE_FETCH_SUCCESS":
      return {
        user: state.user,
        messagesCount: state.messagesCount,
        messages: state.messages,
        message: action.payload,
      };

    case "UPDATE_READ_SUCCESS":
      return {
        user: state.user,
        messagesCount: {
          total: state.messagesCount.total,
          unread: state.messagesCount.unread - 1,
        },
        messages: state.messages,
        message: state.message,
      };

    default:
      return { ...state };
  }
};

export default Reducer;
