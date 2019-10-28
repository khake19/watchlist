import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth'],
  blackList: ['home']
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { store, persistor };
