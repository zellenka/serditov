import React from "react";
import Header from "./header/header";

const Layout = (props) => {

  let pageClass = '';
  props.location.pathname === '/' ? pageClass = '-main' : pageClass = props.location.pathname.replace('/', '-');
  
  const [thumbnails, toggleThumbnails] = React.useState(false);

  const thumbnailsToggler = () => toggleThumbnails(!thumbnails);

  const myOwnProperties = { foo: thumbnails };
  // console.log(thumbnails);
  
  return (
    <div className={`page${pageClass} ${thumbnails  ? 'thumbnails_opened' : ``}`}>
      <Header clickHandler={thumbnailsToggler}/>
      {props.children({ ...props, ...myOwnProperties })}
    </div>
  )
}

export default Layout