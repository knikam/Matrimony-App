import * as actionType from '../constant/actionType';

const initialState = {
  isError: false,
  data: '',
};

export default (state = initialState, action) => {
  switch (action.actionType) {
    case actionType.PROFILE_LOADED:
      return {
        data: action.data,
      };
    case actionType.PROFILE_ERROR:
      return {
        isError: action.isError,
        error: action.error,
      };

    default:
      break;
  }
};
