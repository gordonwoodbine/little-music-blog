import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            {number == currentPage ? 
              <a onClick={() => paginate(number)} href="/#" className="page-link active">{number}</a>: 
              <a onClick={() => paginate(number)} href="/#" className="page-link">{number}</a>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;