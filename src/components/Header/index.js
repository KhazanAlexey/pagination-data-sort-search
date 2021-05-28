import React from "react";

const Header = ({ title = "Page Title" }) => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    type="button"
                    id="sidebarCollapse"
                    className="btn btn-info"
                >
                    <i className="fas fa-align-justify"></i>
                </button>
                <h3>{title}</h3>
            </div>
        </nav>
    );
};

export default Header;
