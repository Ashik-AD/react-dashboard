import ChatActions from "../Actions";
import { Message, Status } from "../definition";

export const fetchChatUserProfile = (userProfile: any) => ({
    type: ChatActions.fetchUserProfile,
    payload: userProfile
});

export const fetchChats = (chat: any) => ({
    type: ChatActions.fetchChats,
    payload: chat
})

export const fetchChatContacts = (chatContact: any) => ({
    type: ChatActions.fetchChatContacts,
    payload: chatContact
})

export const selectCurrentChat = (uid: any, lookup: "chat" | "contact") => ({
    type: ChatActions.selectCurrentChat,
    payload: {
        uid,
        lookup
    }
});

export const changeChatSeenStatus = (uid: any) => ({
    type: ChatActions.changeSeenStatus,
    payload: uid
})

export const sendMessage = (senderId: string | number, message: string): { payload: Message, type: string } => ({
    type: ChatActions.sendMessage,
    payload: {
        message,
        senderId,
        isSent: true,
        isSeen: false,
        isDelivered: false,
        time: new Date().toISOString()
    }
})

export const changeUserStatus = (status: Status) => ({
    type: ChatActions.changeUserStatus,
    payload: status
})