import * as actionType from '../constant/actionType';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.actionType) {
    case actionType.API_REQUEST:
      // eslint-disable-next-line no-labels
      isLoading: action.isLoading;
      break;

    default:
      state;
  }
};
