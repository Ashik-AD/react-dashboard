
export type UserRole = "author" | "subscriber" | "admin" | 'maintainer' | 'editor';

export type UserStatus = "pending" | "active" | "inactive";

export type UserPlan = 'basic' | 'team' | 'company' | 'enterprise';

export interface UserListParams {
    q: string | '';
    role: UserRole | '';
    status: UserStatus | '';
    currentPlan: UserPlan | '';
}

export interface UsersDataType {
    id: number;
    fullName: string;
    company: string;
    role: UserRole;
    username: string;
    contact: string;
    email: string;
    currentPlan: UserPlan;
    status: UserStatus;
    avatar: string | null;
    avatarColor?: string;
    country: string;
}

export interface UserListState {
    data: Array<UsersDataType> | [];
    total: number;
    allData: Array<UsersDataType> | [];
    params: UserListParams;
}