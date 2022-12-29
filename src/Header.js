import React from 'react'
import Logo from './robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';

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
                <input type="text" placeholder="Search" />
            </div>
        </div>
        {/* menu-items */}
    </div>
  )
}

export default Header