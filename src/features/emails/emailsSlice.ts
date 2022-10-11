import { AnyAction } from 'redux'
import { ACTIONS } from './types/action';

import mails from '../../api/emails.json'
import { EmailOption, Mail, MailId } from './types/type';

const INITIAL_STATE: EmailOption = {
    mails,
    filter: {
        text: "",
        label: ""
    },
    selectedMails: [],
    currentOpenMail: null
}

const emailReducer = (state = INITIAL_STATE, action: AnyAction): EmailOption => {
    switch (action.type) {
        case ACTIONS.SelectEmail: {
            const { payload } = action;
            const isSelected = hasOne(state.selectedMails, payload);
            let selected = [];
            if (isSelected) {
                selected = state.selectedMails.filter(previousSelected => previousSelected !== payload)
            }
            else {
                selected = state.selectedMails.concat(payload as MailId);
            }
            return {
                ...state,
                selectedMails: selected
            }
        }

        case ACTIONS.SelectAll: {
            const { selectedMails, mails } = state;
            if (selectedMails.length === mails.length) {
                return {
                    ...state,
                    selectedMails: []
                }
            }
            return {
                ...state,
                selectedMails: state.mails.map(mail => mail.id)
            }
        }

        case ACTIONS.filterChange:
            return {
                ...state,
                selectedMails: [],
                currentOpenMail: null,
                filter: {
                    ...state.filter,
                    text: action.payload as string,
                    label: ""
                }
            }

        case ACTIONS.handleLabelChange:
            return {
                ...state,
                selectedMails: [],
                currentOpenMail: null,
                filter: {
                    ...state.filter,
                    label: action.payload as string
                }
            }

        case ACTIONS.handleStarred:
            return {
                ...state,
                mails: state.mails.map((mail) => {
                    if (mail.id !== action.payload) {
                        return mail;
                    }
                    return {
                        ...mail,
                        isStarred: !mail.isStarred,
                    }
                })
            }

        case ACTIONS.removeMail:
            return {
                ...state,
                mails: state.mails.map((mail) => {
                    if (mail.id !== action.payload) {
                        return mail;
                    }
                    return {
                        ...mail,
                        folder: "trash"
                    }
                }),
                currentOpenMail: null,
            }

        case ACTIONS.removeMailMultiple:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    const matched = hasOne(state.selectedMails, mail.id);
                    if (!matched) {
                        return mail;
                    }
                    else {
                        return {
                            ...mail,
                            folder: "trash"
                        }
                    }
                }),
                currentOpenMail: null,
                selectedMails: [],
            }

        case ACTIONS.readMail:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    if (mail.id !== action.payload) {
                        return mail;
                    }
                    return {
                        ...mail,
                        isRead: !mail.isRead
                    }
                }),
                currentOpenMail: null,
            }

        case ACTIONS.readMultipleMail:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    const matchedMail = hasOne(state.selectedMails, mail.id);
                    if (!matchedMail) {
                        return mail;
                    }
                    return {
                        ...mail,
                        markedRead: true
                    }
                })
            }

        case ACTIONS.moveToSpam:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    if (mail.id !== action.payload) {
                        return mail;
                    }
                    return {
                        ...mail,
                        folder: "spam"
                    }
                }),
                currentOpenMail: null,
            }

        case ACTIONS.moveToSpamMultiple:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    const matchedId = hasOne(state.selectedMails, mail.id);
                    if (!matchedId) {
                        return mail;
                    }
                    return {
                        ...mail,
                        folder: "spam"
                    }
                }),
                selectedMails: [],
                currentOpenMail: null,
            }

        case ACTIONS.addLabel:
            return {
                ...state,
                mails: state.mails.map(mail => {
                    const matchedLabel = hasOne(mail.labels, action.payload);
                    if (matchedLabel) {
                        return mail;
                    }
                    return {
                        ...mail,
                        labels: mail.labels.concat(action.payload)
                    }
                }),

            }

        case ACTIONS.addLabelSingle: {
            const { id, label }: { id: MailId, label: string } = action.payload;
            let updatedOpenedMail = { ...state.currentOpenMail };
            if (updatedOpenedMail) {
                if (updatedOpenedMail.id === id) {
                    if (!hasOne(updatedOpenedMail?.labels, label)) {
                        updatedOpenedMail.labels = updatedOpenedMail.labels?.concat(label)
                    }

                }
            }
            return {
                ...state,
                mails: state.mails.map(mail => {
                    const matchedId = mail.id === id;
                    if (matchedId) {
                        if (hasOne(mail.labels, label)) {
                            return { ...mail }
                        }
                        return {
                            ...mail,
                            labels: mail.labels.concat(label)
                        }
                    }
                    return {
                        ...mail
                    }
                }),
                currentOpenMail: updatedOpenedMail
            }
        }

        case ACTIONS.setCurrentOpenMail:
            return {
                ...state,
                currentOpenMail: action.payload as Mail
            }

        case ACTIONS.clearCurrentOpenMail:
            return {
                ...state,
                currentOpenMail: null
            }

        default:
            return state;
    }
}
export default emailReducer

function hasOne(arrItems: any[], key: any) {
    return arrItems.includes(key);
}