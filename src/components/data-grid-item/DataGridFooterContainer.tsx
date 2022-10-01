import { FC, useState, useEffect, memo, Dispatch, SetStateAction } from "react";
import DataGridFooter from "./DataGridFooter";

const DataGridFooterContainer: FC<Props> = (props, ref) => {
  const { rowPerPage, rowPerPageOptions, total, setPaginationOption } = props;

  const [page, setPage] = useState({
    currentPage: 1,
    nextItemsCount: rowPerPage,
    passedRows: 1,
    rowPerPage,
  });
  // calc pagination
  useEffect(() => {
    const { currentPage, rowPerPage, nextItemsCount } = page;
    const calcNext = currentPage * rowPerPage!;
    const nextRowCounts = calcNext > total ? total : calcNext;

    const passsed =
      currentPage === 1
        ? 1
        : calcNext > total
        ? nextItemsCount! + 1
        : nextRowCounts - page.rowPerPage! + 1;
    setPaginationOption({ next: nextRowCounts, passedRows: passsed });
    setPage((prevState) => ({
      ...prevState,
      nextItemsCount: nextRowCounts,
      passedRows: passsed,
    }));
  }, [page.currentPage, page.rowPerPage]);

  const handlePagination = (page: number) => {
    setPage((prevState) => ({
      ...prevState,
      currentPage: page,
    }));
  };

  const handleRowPerPage = (perPage: number) => {
    setPage((prevState) => ({ ...prevState, rowPerPage: perPage }));
  };

  return (
    <>
      <DataGridFooter
        currentPage={page.currentPage}
        next={page.nextItemsCount}
        passed={page.passedRows}
        total={total}
        handlePagination={handlePagination}
        handleRowOptSelect={handleRowPerPage}
        rowPerPage={rowPerPage}
        rowPerPageOptions={rowPerPageOptions}
      />
    </>
  );
};
export default memo(DataGridFooterContainer);

interface Props {
  total: number;
  rowPerPage: number;
  rowPerPageOptions: number[];
  setPaginationOption: Dispatch<
    SetStateAction<{ next: number; passedRows: number }>
  >;
}
