import { SET_FILTER } from '../constants';

export const setFilterActionCreator = filterString => {
  return {
    type: SET_FILTER,
    payload: {
      filterString
    }
  };
};
