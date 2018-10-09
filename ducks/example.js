import reducerRegistry from '@ducks/reducerRegistry';

export const INCREMENT = '@example/increment';

const initialState = {
  counter: 0,
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

reducerRegistry.register({ example });

export default example;
