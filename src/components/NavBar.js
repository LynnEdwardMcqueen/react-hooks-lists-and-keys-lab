import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map( (linkItem) => {
    return(<a href= {"#" + linkItem} key= {linkItem}>{linkItem} </a> )
  })
  

  return (
    <nav>
        {linkElements}
    </nav>
  )
}

export default NavBar;
