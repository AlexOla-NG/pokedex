import ReactPaginate from "react-paginate";
// import { IPagination } from "./IPagination";

// const Pagination = ({ handlePageClick, pageCount }: IPagination) => {
const Pagination = () => {
  return (
    <ReactPaginate
      containerClassName="paginate"
      activeLinkClassName="active-link"
      breakLabel="..."
      nextLabel={"next"}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={5}
      // pageCount={pageCount}
      previousLabel={"previous"}
    />
  );
};

export default Pagination;
