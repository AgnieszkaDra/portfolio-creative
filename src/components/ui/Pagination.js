import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ totalPosts, postsPerPage, content }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const hasNextPosts = () => {
    const nextPageIndex = currentPage + 1;
    return nextPageIndex * postsPerPage <= totalPosts;
  };

  const handlePrevClick = () => {
    if (currentPage > 1 && hasNextPosts()) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    if (hasNextPosts()) {
      setCurrentPage(page);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages && hasNextPosts()) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="section">
      <nav aria-label="..." className="pagination-nav">
        <ul className="pagination">
          <li 
            className={`pagination__item pagination__item--prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li 
              key={index + 1} 
              className={`pagination__item pagination__item--main ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </li>
          ))}
          <li 
            className={`pagination__item pagination__item--next ${currentPage === totalPages || !hasNextPosts() ? 'disabled' : ''}`}
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
