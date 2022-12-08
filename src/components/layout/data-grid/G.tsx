import { render } from "react-dom";



interface DataGrid<T> {
    header: any[];
    data: Array<T>;
    render: (item: T) => void;
}

const MyTable = <T extends unknown>({data, render}: DataGrid<T>) => {
    console.log(data, render)
}

MyTable({header: [1, 2, 3], data: [{id: 1, name: "Johhn"}], render: (item) => item.id})