import React from 'react'
import Logo from './robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

function Header() {
  return (
    <div className="header_wrapper">
        {/* logo */}
        <div className="header_logo">
            <img src={Logo} width={25} alt="logo"/>
        </div>
        {/* search */}
        <div className="header_search">
            <div className="header_searchContainer">
                <SearchIcon style={{ color: "white" }}/>
                <input className="search_input" type="text" placeholder="Search" />
            </div>
        </div>
        {/* menu-items */}
        <div className="header_menuItems">
            <a href="#">Free Stocks</a>
            <a href="#">Portfolio</a>
            <a href="#">Cash</a>
            <a href="#">Messages</a>
            <a href="#">Account</a>
        </div>
    </div>
  )
}

export default Header