import ACTION_TYPES from "../constant/Index";

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING
});

export const fetchSuccess = data => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data
});

export const fetchError = error => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error
});