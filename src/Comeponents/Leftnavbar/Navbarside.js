// React Component for Sidebar Toggle
import React, { useState } from 'react';
import './Navbarside.css';

const Navbarside = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSidebar = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div id="wrapper" className={isToggled ? 'toggled' : ''}>
            <nav className="navbar navbar-default no-margin">
                <div className="navbar-header fixed-brand">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        onClick={toggleSidebar}
                    >
                        <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-rocket"></i> M-33
                    </a>
                </div>
            </nav>

            <div id="sidebar-wrapper" className={isToggled ? 'visible' : 'hidden'}>
                <ul className="sidebar-nav nav-pills nav-stacked">
                    <li className="active">
                        <a href="#">
                            <span className="fa-stack fa-lg pull-left">
                                <i className="fa fa-dashboard fa-stack-1x"></i>
                            </span>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa-stack fa-lg pull-left">
                                <i className="fa fa-flag fa-stack-1x"></i>
                            </span>
                            Shortcut
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa-stack fa-lg pull-left">
                                <i className="fa fa-cloud-download fa-stack-1x"></i>
                            </span>
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa-stack fa-lg pull-left">
                                <i className="fa fa-cart-plus fa-stack-1x"></i>
                            </span>
                            Events
                        </a>
                    </li>
                </ul>
            </div>

            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <h1>Welcome to the Sidebar UI</h1>
                    <p>Toggle the sidebar using the button above.</p>
                </div>
            </div>
        </div>
    );
};

export default Navbarside;