import React from "react";
import Header from './header/header';

const Layout = ({ children }, props) => {
  console.log(props)
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout