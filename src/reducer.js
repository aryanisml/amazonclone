export const initalState = {
  basket: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_FROM_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    case "REMOVE_FROM_BASKET":
        return state;
    default:
      return state;
  }
};

export default reducer;
