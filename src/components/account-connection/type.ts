
export interface AccountConnectionOption {
    id: number;
    name: string;
    title: string;
    avatar: string;
    connected: boolean;
    uid?: string
}
export interface AccountConnectionAPI {
    main: AccountConnectionOption[],
    social: AccountConnectionOption[]
} 