import React, { useContext, useReducer, useMemo, useEffect } from 'react';
import {
  ADD_ITEM,
  COUPON,
  HERO,
  ITEM,
  MENU,
  SET_INITIAL,
  TREND,
} from '../global/reserveWord';

import { fetchAll } from '../util/service';

const initalState = {
  checkout: [],
  coupon: '',
  favorite: [],
  location: '',
  message: [],
  servingTime: '',
  recentOrder: [],
};

function init(state) {
  return { ...initalState, ...state };
}

function reducer(state, action) {
  const { payload } = action;
  const { data, type } = payload;

  switch (action.type) {
    case SET_INITIAL:
      return init(data);
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

  const dispatch_setInitial = (data) => {
    dispatch({
      type: SET_INITIAL,
      payload: {
        type: 'NONE',
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

  useEffect(() => {
    const types = [COUPON, HERO, ITEM, MENU, TREND];
    (async () => {
      let list = await fetchAll(types);
      dispatch_setInitial(list);
    })();
  }, []);

  useEffect(() => {
    console.log('state check', state);
  }, [state]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
