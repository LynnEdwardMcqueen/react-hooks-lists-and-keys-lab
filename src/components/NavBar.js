import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map( (linkItem, index) => {
    return(<a href= {"#" + linkItem} key= {index}>{linkItem} </a> )
  })
  

  return (
    <nav>
        {linkElements}
    </nav>
  )
}

export default NavBar;
