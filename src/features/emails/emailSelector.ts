import { createSelector } from 'reselect'
import { RootState } from '../../store/store';
import { MailLabel } from './types/type';

const emailFilterSelector = createSelector((state: RootState) => state.email.mails, (state: RootState) => state.email.filter, (mails, filter) => {
    const matchId = [];
    if(mails){
        for (let i = 0; i < mails.length; i++) {
            if (
                filter.text === "starred" &&
                mails[i].isStarred &&
                mails[i].folder !== "trash"
            ) {
                matchId.push(mails[i].id)
            }
            else if (filter.label) {
                const labelMatched = mails[i].labels.includes(filter.label as MailLabel);
                if (labelMatched) {
                    matchId.push(mails[i].id);
                }
            }
            else if (mails[i].folder === filter.text) {
                matchId.push(mails[i].id)
            }
        }
        return matchId;
    }
});

export default emailFilterSelector;