import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <footer className="site-footer">
      <div className="wrapper">
        <p className="footer-text">
          Design and Code by <a className="footer-link" href="https://github.com/gordonwoodbine" target="_blank">Mike Lightfoot</a></p>
        <p className="footer-text">&copy; {year}</p>
      </div>
    </footer>
  )
}

export default Footer;