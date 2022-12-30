import React from 'react';

const Footer = () => {
    return (
      <footer className="text-center p-4">
        <small>&copy; AUTOFIX | {new Date().getFullYear()} </small>
      </footer>
    );
};

export default Footer;