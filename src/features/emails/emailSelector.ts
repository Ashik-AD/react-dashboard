import { createSelector } from 'reselect'
import { RootState } from '../../store/store';

const emailFilterSelector = createSelector((state: RootState) => state.email.mails, (state: RootState) => state.email.filter, (mails, filter) => {
    const matchId = [];
    for (let i = 0; i < mails.length; i++) {
        if (
            filter.text === "starred" &&
            mails[i].isStarred &&
            mails[i].folder !== "trash"
        ) {
            matchId.push(mails[i].id)
        }
        else if (filter.label) {
            const labelMatched = mails[i].labels.includes(filter.label);
            if (labelMatched) {
                matchId.push(mails[i].id);
            }
        }
        else if (mails[i].folder === filter.text) {
            matchId.push(mails[i].id)
        }
    }
    return matchId;
});

export default emailFilterSelector;