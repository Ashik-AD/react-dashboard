import { combineReducers } from 'redux';
import chatReducer from '../features/chats/chatSlice';
import emailReducer from '../features/emails/emailsSlice';
import invoiceReducer from '../features/invoices/invoicesSlice';

const rootReducer = combineReducers({
    email: emailReducer,
    chat: chatReducer,
    invoice: invoiceReducer
});
export default rootReducer;