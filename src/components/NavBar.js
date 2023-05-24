import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link) => {
    return <a key = {link} href={`#${link}`}> {link} </a> //test fails here because no #about
  })}</nav>;
}

export default NavBar;
