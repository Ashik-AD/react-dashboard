import concatActionString from "../../utils/concatActionString";

const concatName = concatActionString("chats");

const ChatActions = {
    fetchUserProfile: concatName("fetchUserProflie"),
    fetchChats: concatName('fetchChats'),
    fetchChatContacts: concatName("fetchChatContacts"),
    selectCurrentChat: concatName("selectCurrentChat"),
    changeSeenStatus: concatName("changeSeenStatus"),
    sendMessage: concatName("sendMessage"),
    changeUserStatus: concatName("changeUserStatus")
}
export default ChatActions;