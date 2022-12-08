
export type Status = "Online" | "Away" | "Dnd" | "Offline"

export interface UserProfile {
    uid: number | string;
    user_name: string;
    avatar_src?: string;
    role: string;
    status: Status;
    about: string;
    icon?: string;
    color?: string;
}

export interface Message {
    senderId: number | string;
    message: string;
    time: string;
    isSent: boolean;
    isDelivered: boolean;
    isSeen: boolean;
}

export interface Chats {
    profile: UserProfile;
    chats: {
        lastMessage: {
            total: number;
            message: string;
            isSeen: boolean;
            time: string;
        };
        chat: Message[];
    };
}

export interface Contacts extends UserProfile, Chats { }

export interface ChatState {
    currentUser: UserProfile;
    chats: Array<Chats> | [];
    contacts: Contacts[] | [];
    selectedChat: Chats | null;
}

