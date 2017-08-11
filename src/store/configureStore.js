import { createStore, compose } from 'redux';
import reducers from '../reducers';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';

const configureStore = () => {

  const db = new PouchDB('todos');

  const createStoreWithMiddleware = compose(
    persistentStore({ db })
  )(createStore);

  const store = createStoreWithMiddleware(
    reducers
  );

  return store;
}

export default configureStore;