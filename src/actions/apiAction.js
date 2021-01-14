import * as actionType from '../constant/actionType';

export const apiRequest = status => {
  return {
    type: actionType.API_REQUEST,
    isLoading: status,
  };
};
