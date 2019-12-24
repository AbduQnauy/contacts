import React from "react";
import PaginationBlock from "./PaginationBlock";
//
const Pagination = ({
  contactsPerPage,
  totalContacts,
  currentPage,
  updatePagination
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, index) => {
    updatePagination({ currentPage: pageNumber });
  };
  const first = () => updatePagination({ currentPage: 1 });

  const last = () => updatePagination({ currentPage: pageNumbers.length });
  const next = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1])
      updatePagination({ currentPage: currentPage + 1 });
  };
  const previous = () => {
    if (currentPage !== pageNumbers[0])
      updatePagination({ currentPage: currentPage - 1 });
  };
  return (
    <PaginationBlock
      pageNumbers={pageNumbers}
      currentPage={currentPage}
      paginate={paginate}
      first={first}
      last={last}
      next={next}
      previous={previous}
    />
  );
};
export default Pagination;
