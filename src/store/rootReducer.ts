import { combineReducers } from 'redux';
import emailReducer from '../features/emails/emailsSlice';

const rootReducer = combineReducers({
    email: emailReducer
});
export default rootReducer;