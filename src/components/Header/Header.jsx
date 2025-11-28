import React from "react";
import classes from './Header.module.css';
import logo from './../assets/images/logo.svg';
import reactLogo from './../assets/images/react.svg'; // import React logo


const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <img className={classes.logo} src={logo} alt="Logo" />
                </div>
                <div className={classes.textRight}>
                    <img src={reactLogo} alt="React" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;
