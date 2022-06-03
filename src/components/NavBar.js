import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const alink = links.map((link) => (
    <a key={link} href={'#' + link}>{link}</a>));
  
  return <nav>{alink}</nav>
}

export default NavBar;
