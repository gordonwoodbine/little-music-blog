import React from 'react';
import marked from 'marked';

const Post = ({ article }) => {
  const { title, artist, content, videoEmbed } = article.fields;
  const postBody = marked(content);
  const video = marked(videoEmbed);
  
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <p className="artist">By {artist} </p>
        <div className="videoWrapper" dangerouslySetInnerHTML={{ __html: video }} />
      <section dangerouslySetInnerHTML={{ __html: postBody }} />
    </div>
  )
}

export default Post;