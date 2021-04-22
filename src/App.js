import React, { useState, useEffect } from 'react';
import './App.css';
import { client } from './client';
import Header from './components/Header';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    client.getEntries()
      .then((res) => {
        setArticles(res.items);
      })
      .catch(console.error)
  }, []);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(`Page No: ${pageNumber}`)
  }
 
    return (
      <div className="App">
        <div className="container">
          <Header />
          <main>
            <div className="wrapper">
              <Posts posts={currentPosts} />
              < Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate} />
            </div>
          </main>
        </div>
      </div>
    );
}

export default App;
