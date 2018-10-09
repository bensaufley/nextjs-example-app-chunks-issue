const dev = process.env.NODE_ENV === 'development';

export default class ReducerRegistry {
  constructor(coreReducers) {
    this._reducers = { ...coreReducers };
  }

  getReducers = () => ({ ...this._reducers });

  register = (name, reducer) => {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }

  setChangeListener = (listener) => {
    this._emitChange = listener;
  }
}
