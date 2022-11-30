const GET_STATE = 'GET_STATE';

const getState = (payload) => ({
  type: GET_STATE,
  payload,
});


export { GET_STATE, getState };