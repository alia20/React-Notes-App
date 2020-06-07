import React from "react";
import ReactDom from "react-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> copyright {currentYear}</p>
      </footer>
    </div>
  );
}
export default Footer;
