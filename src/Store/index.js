import { createStore, applyMiddleware } from 'redux';
import thunkRedux from 'redux-thunk';
import applicantReducer from './Reducers/applicantReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage,
}
const pReducer = persistReducer(persistConfig, applicantReducer)
export default () => {
    let store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunkRedux)))
    let persistor = persistStore(store)
    return { store, persistor }
}