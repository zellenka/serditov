import React from "react";
import Header from "./header/header";

const Layout = (props) => {

  let pageClass = '';
  props.location.pathname === '/' ? pageClass = '-main' : pageClass = props.location.pathname.replace('/', '-');
  
  const [thumbnails, toggleThumbnails] = React.useState(props.thumb);

  const thumbnailsToggler = () => toggleThumbnails(!thumbnails);

  console.log(thumbnails);

  useEffect(() => {
    props.thumb ? toggleThumbnails(false)
  });
  
  return (
    <div className={`page${pageClass} ${thumbnails  ? 'thumbnails_opened' : ``}`}>
      <Header clickHandler={thumbnailsToggler}/>
      {props.children }
    </div>
  )
}

export default Layout