import {configureStore} from '@reduxjs/toolkit'
import { AnyAction } from 'redux';
import  { ThunkDispatch } from 'redux-thunk'
import rootReducer from './rootReducer'

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & AppThunk;
export type AppThunk = ThunkDispatch<RootState, null, AnyAction>

export default store;