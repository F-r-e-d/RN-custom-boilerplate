
// import getAllScores from './Reducers/getAllScoresReducer';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers/getAllScoresReducer';
import { AsyncStorage } from 'react-native';
import {
    persistStore,
    persistCombineReducers,
    persistReducer
  } from 'redux-persist';

const config = {
    key: 'root',
    storage: AsyncStorage,
  };

  
  const reducers = persistCombineReducers(config,  {results: rootReducer, bestPlayerScore: rootReducer} )

  const persistedReducer = persistReducer(config, reducers);


  export default () => {
    let store = createStore(persistedReducer, compose(
        applyMiddleware(thunkMiddleware)
      ))
    let persistor = persistStore(store)
    return { store, persistor }
  }
