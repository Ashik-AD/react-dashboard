import { AnyAction } from 'redux';
import { AppThunk } from '../../store/store';
import { client } from '../../api/client';
import ChatActions from './Actions';
import { fetchChatContacts, fetchChats, fetchChatUserProfile } from './creator';
import { Chats, ChatState, Contacts } from './definition';
const INITIAL_STATE: ChatState = {
    currentUser: {} as any,
    chats: [],
    contacts: [],
    selectedChat: null
}

export default function chatReducer(state = INITIAL_STATE, action: AnyAction): ChatState {
    switch (action.type) {
        case ChatActions.fetchUserProfile:
            return {
                ...state,
                currentUser: action.payload,
            }

        case ChatActions.fetchChats:
            return {
                ...state,
                chats: action.payload
            }

        case ChatActions.fetchChatContacts:
            return {
                ...state,
                contacts: action.payload
            }

        case ChatActions.selectCurrentChat:

            return {
                ...state,
                chats: state.chats.map(chat => {
                    if (chat.profile.uid === action.payload.uid) {
                        return {
                            ...chat,
                            chats: {
                                ...chat.chats,
                                lastMessage: {
                                    ...chat.chats.lastMessage,
                                    isSeen: true,
                                    total: 0
                                }
                            }
                        }
                    }
                    return { ...chat }
                }),
                selectedChat: action.payload.lookup === "chat" ? state.chats.find(chat => chat.profile.uid === action.payload.uid) as Chats : state.contacts.find(cnt => cnt.profile.uid === action.payload.uid) as Contacts
            }

        case ChatActions.sendMessage: {
            const id = state.selectedChat?.profile.uid;
            const chats = [...state.chats];
            const chatIndex = chats.findIndex(chat => chat.profile.uid === id);
            // check selected chat is available or not in chat list
            // if not then, add to the chat 
            const selectedChat = { ...state.selectedChat! };
            const { message, time } = action.payload;

            if (chatIndex === -1) {
                selectedChat.chats = {
                    ...selectedChat.chats,
                    lastMessage: {
                        total: 0,
                        message,
                        isSeen: true,
                        time
                    },
                    chat: [action.payload]
                }
                chats.unshift(selectedChat as Chats); // Make newly sended message contact at the first position in the chats group
                const removeFromContact = state.contacts.filter(cnt => cnt.profile.uid !== id);
                return {
                    ...state,
                    selectedChat,
                    chats,
                    contacts: removeFromContact
                }
            }
            else {
                // update the last message text
                selectedChat.chats = {
                    ...selectedChat.chats,
                    lastMessage: {
                        total: 0,
                        message,
                        isSeen: true,
                        time
                    },
                    chat: selectedChat!.chats!.chat.concat({ ...action.payload })
                };

                // update the the chat list position
                chats.splice(chatIndex, 1);
                chats.unshift(selectedChat as Chats);
                return {
                    ...state,
                    selectedChat,
                    chats
                }
            }
        }

        case ChatActions.changeUserStatus:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    status: action.payload
                }
            }

        default:
            return state;
    }
}

export const fetchUserProfile = async (dispatch: AppThunk) => {
        const res = await client.get("/6395f1a8c5b3a64f1bc9088e/userProfile");
        dispatch(fetchChatUserProfile(res));
    
}
export const fetchChat = async (dispatch: AppThunk) => {
    const res = await client.get('/6395f1a8c5b3a64f1bc9088e/chats');
    dispatch(fetchChats(res))
}
export const fetchChatContact = async (dispatch: AppThunk) => {
    const res = await client.get("/6395f1a8c5b3a64f1bc9088e/chatContacts");
    dispatch(fetchChatContacts(res));
}