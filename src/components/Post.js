import React from 'react';
import marked from 'marked';

// marked converts the markdown we get from Contentful into HTML

const Post = ({ article }) => {
  const { title, artist, content, videoEmbed, datePosted } = article.fields;
  const postBody = marked(content);
  const video = marked(videoEmbed);
  const date = formatDate(datePosted);
  
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <p className="artist">By {artist} </p>
        <div className="videoWrapper" dangerouslySetInnerHTML={{ __html: video }} />
      <section dangerouslySetInnerHTML={{ __html: postBody }} />
      <p className="post-date">Posted on <span>{date}</span></p>
    </div>
  )
}

// Contentful returns the date as 'yyyy-mm-dd' so reverse it.
function formatDate(date) {
  return date.split('-').reverse().join('/');
}

export default Post;