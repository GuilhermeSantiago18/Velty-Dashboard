const GET_SEARCH = 'GET_SEARCH';

const getSearch = (payload) => ({
  type: GET_SEARCH,
  payload,
});


export { GET_SEARCH, getSearch };