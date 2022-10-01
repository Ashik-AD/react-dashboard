
const sort = <TItems>(items: TItems[]) => {
    return (fn: (item1: any, item2: any) => 1 | -1) => {
        return items.sort((x, y) => fn(x, y));
    };
};

const sortLists = (arrList: Record<string, { field: string | number | undefined }>[]) => {
    return (fieldId: string, dir: 'asc' | 'desc') => {
        const sortBy = sort(arrList);
        let sortedList = [];
        if (dir === 'asc') {
            sortedList = sortBy((x, y) => forAscending(x[fieldId], y[fieldId]))
        }
        else {
            sortedList = sortBy((x, y) => forDescending(x[fieldId], y[fieldId]))
        }
        return sortedList;
    }
}

const forAscending = (x: string | number, y: string | number) => x < y ? -1 : 1;
const forDescending = (x: number | string, y: string | number) => x > y ? -1 : 1;

export default sortLists;