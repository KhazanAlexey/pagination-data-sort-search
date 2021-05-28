import React from "react";
import { useDispatch } from "react-redux";
// import { toggleNavbar } from "actions/layout";

const Header = ({ title = "Page Title" }) => {

    const toogleNavbar = () => {
        return alert('ey')
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    type="button"
                    id="sidebarCollapse"
                    className="btn btn-info"
                    onClick={toogleNavbar}
                >
                    <i className="fas fa-align-justify"></i>
                </button>
                <h3>{title}</h3>
            </div>
        </nav>
    );
};

export default Header;
