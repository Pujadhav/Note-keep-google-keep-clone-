import React from 'react';
import './Header.css';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
function Header(){
    return(
        <div className="header">
            <button className="header_menu"><Menu/></button>
            <div className="header_logo">
                <img  src="../img/googlekeep-logo.png" alt=""/>
                <p>Keep</p></div>
            <div className="header_searchinput" >
            <SearchIcon className="header_searchicon"/>
            <input className="header_searchbar" type="text" placeholder="search...."/>
            </div>
            <button className="header_signin">Login</button>
        </div>
    )
}
export default Header;