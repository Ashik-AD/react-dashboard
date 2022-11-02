import { combineReducers } from 'redux';
import chatReducer from '../features/chats/chatSlice';
import emailReducer from '../features/emails/emailsSlice';
import invoiceReducer from '../features/invoices/invoicesSlice';
import userReducer from '../features/users/usersSlice';
const rootReducer = combineReducers({
    email: emailReducer,
    chat: chatReducer,
    invoice: invoiceReducer,
    user: userReducer
});
export default rootReducer;