import React from 'react'
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div>
    <header  className={Style.header}>
        <h1>React + Ts to do</h1>
    </header>
    </div>
  )
}

export default Header