import { createStore, combineReducers } from 'redux';

import reducerRegistry from '@ducks/reducerRegistry';

const makeStore = (initialState) => {
  const combine = (reducers) => {
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState || {}).forEach((item) => {
      if (reducerNames.indexOf(item) < 0) reducers[item] = (state = null) => state;
    });
    if (!Object.keys(reducers).length) return (state) => state;
    return combineReducers(reducers);
  };

  let store;

  const rootReducer = combine(reducerRegistry.getReducers());
  const enhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  store = createStore(rootReducer, initialState, enhancer || undefined);

  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combine(reducers));
  });

  return store;
};

export default makeStore;
