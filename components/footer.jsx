import React from "react";


function footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default footer;