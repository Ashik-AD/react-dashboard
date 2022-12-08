import { applyMiddleware, createStore, AnyAction } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & AppThunk;
export type AppThunk = ThunkDispatch<RootState, null, AnyAction>

export default store;