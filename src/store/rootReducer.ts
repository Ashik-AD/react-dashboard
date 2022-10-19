import { combineReducers } from 'redux';
import chatReducer from '../features/chats/chatSlice';
import emailReducer from '../features/emails/emailsSlice';

const rootReducer = combineReducers({
    email: emailReducer,
    chat: chatReducer
});
export default rootReducer;