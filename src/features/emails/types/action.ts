import { MailId } from "./type";

export const ACTIONS = {
    fetchEmail: concatString("fetchEmail"),
    SelectEmail: concatString("selectEmail"),
    SelectAll: concatString("selectAllEmail"),
    filterChange: concatString("filterChange"),
    handleStarred: concatString("starredMail"),
    removeMail: concatString("removeEmail"),
    removeMailMultiple: concatString("removeEmailMultiple"),
    readMail: concatString("readEmail"),
    readMultipleMail: concatString('readMultipleEmail'),
    moveToSpam: concatString('moveToSpam'),
    moveToSpamMultiple: concatString('moveToSpamMultiple'),
    addLabel: concatString('addLabel'),
    addLabelSingle: concatString("addLabelSingle"),
    handleLabelChange: concatString("handleLabelChange"),
    clearCurrentOpenMail: concatString("clearCurrentOpenMail"),
    setCurrentOpenMail: concatString("setCurrentOpenMail")
}
type SelectedIds = Array<MailId>

export default interface Actions {
    type: keyof Actions;
    payload?: MailId | SelectedIds | {} | [];
}

function concatString(text: string) {
    return `emails/${text}`
}