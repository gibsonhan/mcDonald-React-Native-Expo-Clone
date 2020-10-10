import React, { useContext, useReducer, useMemo } from 'react';
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

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const dispatch_additem = (type, data) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  const values = useMemo(
    () => ({
      dispatch_additem,
      state,
    }),
    [dispatch_additem, state],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
