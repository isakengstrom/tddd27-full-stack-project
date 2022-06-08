import React from "react";
import "./styles.scss";
let FontAwesome = require('react-fontawesome')


const CalendarSidebar = () => {
    // https://bootstrapious.com/p/bootstrap-sidebar#sidebar-4
    /*
    <div className="sidebar-header">
        <h3>Calendar Sidebar</h3>
        <strong>CS</strong>
    </div>
    */

    return (
        <div className="wrapper">
            <nav id="sidebar" className="w-50">
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            Home
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            Pages
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default CalendarSidebar;
