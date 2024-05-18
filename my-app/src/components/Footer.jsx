import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>All rights belong to J.Sai Jayanth,Copyright ⓒ {currentYear}</p>
    </footer>
  );
}
export default Footer;
