
export interface ProfileSettings {
    avatar?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    organization?: string;
    phoneNumber?: number;
    address?: string;
    state?: string;
    zipcode?: number;
    country?: string;
    language?: string;
    currency?: string;
}


export type PasswordErrors = "currentPassword" | "newPassword" | "confirmPassword";
export type PwdSwitch = "P1" | "P2" | "P3";
