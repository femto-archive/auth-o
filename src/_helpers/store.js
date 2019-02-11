import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../_reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger()
const persistConfig = {
    key: 'root',
    storage
}

const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
)

const persistor = persistStore(store)

export {
    store, persistor
}