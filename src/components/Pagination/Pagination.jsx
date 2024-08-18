import React, { useEffect } from "react";
import "../../styles/_mixins.scss";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  let pages = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="shop__page__content__pagination">
        {pages.length > 1 && (
          <>
            <MdKeyboardArrowLeft size={20} onClick={prevPage} />
            <ul>
              {pages.map((page) => (
                <li key={page}>
                  <button
                    className={`${page === currentPage ? `active` : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
            <MdKeyboardArrowRight size={20} onClick={nextPage} />
          </>
        )}
      </div>
    </>
  );
};

export default Pagination;
