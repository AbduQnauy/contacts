import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationBlock = ({
  pageNumbers,
  currentPage,
  paginate,
  first,
  last,
  previous,
  next
}) => {
  if (pageNumbers.length > 1) {
    return (
      <Pagination aria-label="Page navigation paginationBlock">
        <PaginationItem
          onClick={first}
          disabled={currentPage === pageNumbers[0]}
        >
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem
          onClick={previous}
          disabled={currentPage === pageNumbers[0]}
        >
          <PaginationLink previous />
        </PaginationItem>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationItem
            onClick={() => paginate(pageNumber, index)}
            key={index}
            active={index + 1 === currentPage}
          >
            <PaginationLink>{pageNumber}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          onClick={next}
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
        >
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem
          onClick={last}
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
        >
          <PaginationLink last />
        </PaginationItem>
      </Pagination>
    );
  } else return null;
};

export default PaginationBlock;
