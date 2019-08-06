import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagamiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagamiddleware];

const store = createStore(rootReducer, middlewares);

sagamiddleware.run(rootSagas);

export default store;
