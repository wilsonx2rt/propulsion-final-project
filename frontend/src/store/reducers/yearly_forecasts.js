import { SET_YEARLY_FORECASTS } from '../constants';

export const yearly_forecasts = (state={}, action) => {
  switch (action.type){
    case SET_YEARLY_FORECASTS: {
      return action.payload.yearly_forecasts;
    }
    default: 
      return state;
  }
}