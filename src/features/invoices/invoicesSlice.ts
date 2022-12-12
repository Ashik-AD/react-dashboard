import { AnyAction } from 'redux'
import { client } from '../../api/client';
import { AppDispatch, RootState } from '../../store/store';
import { fetchInvoice } from './creator';
import { InvoiceActionName } from './types/action';
import type { InvoiceList, InvoiceState } from "./types/definition";

const INITIAL_STATE: InvoiceState = {
    data: [],
    allData: [],
    total: 0
}

const invoiceReducer = (state = INITIAL_STATE, action: AnyAction): InvoiceState => {

    switch (action.type) {
        case InvoiceActionName.fetchInvoice:
            const invoiceList = action.payload
            return {
                ...state,
                data: invoiceList,
                allData: invoiceList,
                total: invoiceList.length
            }
        case InvoiceActionName.searchData:
            const searchKey = action.payload;
            const result = searchKey ? state.allData.filter(item => search(item, searchKey)) : state.allData;
            return {
                ...state,
                data: result,
                total: result.length
            }

        default:
            return state;
    }

}
export default invoiceReducer;

export const fetchInvoiceData = async (dispatch: AppDispatch, getState: RootState) => {
    const response = await client.get('/6395f1bbc5b3a64f1bc9089c');
    dispatch(fetchInvoice(response))
}

const search = (item: InvoiceList, term: string): boolean => {
    const search = isContains(term.toLowerCase());
    if (search(item.id.toString()) || search(item.name) || search(item.companyEmail) || search(item.total.toString()) || search(item.invoiceStatus)) {
        return true;
    }
    return false;
}
const isContains = (term: string) => (value: string): boolean => value.toLowerCase().includes(term);
