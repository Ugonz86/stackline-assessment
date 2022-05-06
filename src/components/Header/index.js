import React, { Component } from "react";
import logo from "../../images/stackline_logo.svg";
import "../../App.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt={logo} className="logo" />
            </div>
        )
    }
}

export default Header;