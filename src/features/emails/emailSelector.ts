import { createSelector } from 'reselect'
import { RootState } from '../../store/store';

const emailFilterSelector = createSelector((state: RootState) => state.email.mails, (state: RootState) => state.email.filter, (mails, filter) => mails.filter((mail) => {
    if (
        filter.text === "starred" &&
        mail.isStarred &&
        mail.folder !== "trash"
    ) {
        return true;
    }
    if (filter.label) {
        const labelMatched = mail.labels.includes(filter.label);
        if (labelMatched) {
            return true;
        }
        return false;
    }
    return mail.folder === filter.text;
}));

export default emailFilterSelector;