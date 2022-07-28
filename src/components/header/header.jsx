import React from "react";
import './header.css';
import Menu from '../assets/menu.png';
import Keep from '../assets/keep.png';
import Refresh from '../assets/refresh.png';
import List from '../assets/list.png';
import Settings from '../assets/settings.png'
import User from '../assets/usericon.png';
import Grid from '../assets/grid.png';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header1">
                    <img src={Menu} alt="menu icon" className="menu" />
                    <img src={Keep} alt="keep logo" className="keep" />
                    <h2>Keep</h2>
                </div>
                <div className="header2">
                    <input className="Search" placeholder="Search"></input>
                </div>
                <div className="header3">
                    <img src={Refresh} alt="refresh logo" className="logo" />
                    <img src={List} alt="List logo" className="logo" />
                    <img src={Settings} alt="List logo" className="logo" />
                </div>
                <div className="header4">
                <img src={Grid} alt="grid logo" className="logo1" />
                    <img src={User} alt="user logo" className="logo1" />
                </div>
            </div>
        </div>
    )
}
export default Header;