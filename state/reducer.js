import { useReducer, useMemo } from 'react';

import { ADD_ITEM, SET_INITIAL } from '../global/reserveWord';

const initalState = {
  checkout: [],
  coupon: '',
  favorite: [],
  location: '',
  message: [],
  servingTime: '',
  recentOrder: [],
};

function reducer(state, action) {
  const { payload } = action;
  const { type } = payload;

  switch (action.type) {
    case SET_INITIAL:
      return state;
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const DISPATCH_ADD_ITEM = (type, data) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  return { state, DISPATCH_ADD_ITEM };
};
