
interface Address {
    country: string;
    location: string;
}
interface Contacts {
    phone: string;
    email: string;
    others: [
        { id: number; type: string; value: string; }
    ]
}

interface Team {
    id: number;
    title: string;
    totalMember: number;
}

interface Overview {
    id: number;
    title: string;
    total: number;
}

interface About {
    fullName: string;
    profileAvatar: string;
    role: string;
    job: string;
    joinAt: string;
    status: string;
    address: Address;
    contacts: Contacts;
    language: string;
}

export default interface ProfileAPI {
    about: About;
    teams: Array<Team>;
    overview: Array<Overview>;
}

