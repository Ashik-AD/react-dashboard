
// filter operation
// => filter by contains
// => filter by equals
// => filter by start with
// => filter by ends with
// => filter by is empty
// => filter by is not empty

export enum OperationList {
    CONTAINS = "contains",
    EQUALS = "equals",
    ENDSWITH = "endsWith",
    STARTWITH = "startWith",
    EMPTY = "empty",
    NOTEMPTY = "notEmpty"
}

type Operations = OperationList.CONTAINS | OperationList.EQUALS | OperationList.ENDSWITH | OperationList.STARTWITH | OperationList.EMPTY | OperationList.NOTEMPTY;

const mapForFilter = (lists: {}[], fn: (item: { [field: string]: string | number }) => boolean) => {
    const items = [];
    for (let i = 0; i < lists.length; i++) {
        if (fn(lists[i])) {
            items.push(lists[i])
        }
    }
    return items;
}

const normalizFieldValue = (val: string | number) => val.toString().toLowerCase();

const filterList = (items: {}[], fieldName: string) => {
    return (operator: Operations, value?: string | number) => {
        const filter = mapForFilter.bind(this, items);
        const fieldId = fieldName.toString();
        switch (operator) {
            case 'contains':
                const filterByContains = filter((item) => normalizFieldValue(item[fieldId]).includes(normalizFieldValue(value!)));
                return filterByContains;

            case 'empty':
                const filterByIsEmpty = filter((item) => !item[fieldId]);
                return filterByIsEmpty;

            case "equals":
                const filterByEqual = filter((item) => normalizFieldValue(item[fieldId]) === normalizFieldValue(value!));
                return filterByEqual;

            case "notEmpty":
                const filterByNotEmpty = filter((item) => (item[fieldId] === "" || item[fieldId] === null || item[fieldId] === undefined) ? false : true);
                return filterByNotEmpty;

            case "startWith":
                const filterByStartWith = filter((item) => normalizFieldValue(item[fieldId]).startsWith(normalizFieldValue(value!)));
                return filterByStartWith;

            case "endsWith":
                const filterByEndsWith = filter((item) => normalizFieldValue(item[fieldId]).endsWith(normalizFieldValue(value!)));
                return filterByEndsWith;

            default:
                return items;
        }
    }
}

export default filterList; 