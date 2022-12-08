
export type MailId = number | string;

export type MailLabel = "personal" | "private" | "company" | "important"

export interface Mail {
    id: MailId;
    from: {
        full_name: string;
        email: string;
        avatar_src?: string;
        icon?: string;
    };
    to: { full_name: string; email: string; }[];
    cc: string[];
    bcc: string[];
    subject: string;
    message: string;
    attachments: string[];
    isStarred: boolean;
    isRead: boolean;
    labels: MailLabel[];
    timestamp: string;
    folder: string;
    replise: [];
    hasPreviousMail?: boolean;
    hasNextMail?: boolean;
} 

export interface EmailOption {
    mails: Mail[] | null,
    filter: {
        text: string;
        label: string;
    },
    selectedMails: Array<MailId>,
    currentOpenMail: Mail | null
}