import React from 'react';

const Footer = () => {
    return (
      <footer className="text-center p-4 bg-dark text-white">
        <small>&copy; AUTOFIX | {new Date().getFullYear()} </small>
      </footer>
    );
};

export default Footer;