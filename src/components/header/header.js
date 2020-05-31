import React from "react"
import { Link } from "gatsby"

import headerStyles from "../header/header.module.css"

const MainLogo = ()=> {
  return (
      <Link to="/" className={headerStyles.logo}>
        <span className={headerStyles.logo__title}>serditov</span>
        <span className={headerStyles.logo__subtitle}>Interior design & architecture</span>
      </Link>
  )
}

const MainNavigation = () => {
  return (
    <nav className={headerStyles.mainNav}>
      <ul>
          <li><Link activeClassName={headerStyles.active} to="/about">About</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/showcase">Showcase</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/">Portfolio</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/">Services</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

const Hamburger = () => {
  return (
    <button className={headerStyles.hamburger}>
      <svg height="20" viewBox="0 -53 384 384" width="20">
        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      </svg>
      <span>Main menu</span>
    </button>
  )
}



const Header = (props) => {
  return (

    <header id={props} className={headerStyles.mainHeader}>
      <MainLogo />
      <MainNavigation />
      <Hamburger />
    </header>
  );
}

export default Header;