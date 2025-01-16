export const MESSAGE_INPUT_CHANGE = "MESSAGE_INPUT_CHANGE";
export const MESSAGE_SUBMIT = "MESSAGE_SUBMIT";
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";

export const SEARCHED_MESSAGE = "SEARCHED_MESSAGE";

export const searchedMessage = (payload) => ({
  type: SEARCHED_MESSAGE,
  payload
}) ;

export const messageInputChange = (payload) => ({
  type: MESSAGE_INPUT_CHANGE,
  payload
});

export const messageSubmit = () => ({
  type: MESSAGE_SUBMIT,
  
});

export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  payload
});
