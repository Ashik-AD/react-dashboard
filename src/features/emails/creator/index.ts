
import { ACTIONS } from '../types/action'
import { Mail, MailId } from '../types/type';

export const fetchEmails = (emails: any) => ({
    type: ACTIONS.fetchEmail,
    payload: emails
})

export const selectEmail = (mailId: MailId) => {
    return {
        type: ACTIONS.SelectEmail,
        payload: mailId
    }
}

export const selectAllEmail = () => ({
    type: ACTIONS.SelectAll
});

export const starredEmail = (mailId: MailId) => ({
    type: ACTIONS.handleStarred,
    payload: mailId
});

export const readEmail = (mailId: MailId) => ({
    type: ACTIONS.readMail,
    payload: mailId
});

export const readMultipleEmail = () => ({
    type: ACTIONS.readMultipleMail,
})

export const moveToSpam = (mailId: MailId) => ({
    type: ACTIONS.moveToSpam,
    payload: mailId
})

export const moveToSpamMultiple = () => ({
    type: ACTIONS.moveToSpamMultiple,
})

export const removeEmail = (mailId: MailId) => ({
    type: "emails/removeEmail",
    payload: mailId
})

export const removeMultipleEmail = () => ({
    type: ACTIONS.removeMailMultiple,
})

export const filterChanged = (filterKey: string) => ({
    type: ACTIONS.filterChange,
    payload: filterKey
})

export const addLabel = (label: string) => ({
    type: ACTIONS.addLabel,
    payload: label
})
export const addLabelSingle = (mailId: MailId, label: string) => ({
    type: ACTIONS.addLabelSingle,
    payload: {
        label,
        id: mailId
    }
})

export const handleLabelChange = (label: string) => ({
    type: ACTIONS.handleLabelChange,
    payload: label
})

export const clearCurrentOpenMail = () => ({
    type: ACTIONS.clearCurrentOpenMail
})

export const setCurrentOpenMail = (mail: Mail) => ({
    type: ACTIONS.setCurrentOpenMail,
    payload: mail
})