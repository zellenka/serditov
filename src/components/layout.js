import React from "react";
import Header from "./header/header";

const Layout = ({ loca, children }) => {

  let pageClass = '';
  loca.pathname === '/' ? pageClass = '-main' : pageClass = loca.pathname.replace('/', '-');
  
  return (
    <div className={`page${pageClass}`}>
      <Header />
      {children}
    </div>
  )
}

export default Layout