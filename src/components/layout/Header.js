import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo/Logo.png";

export default function Header() {
    return (
        <header style={headerStyle}>
            <Link to={"/"}>
                <img style={logoStyle} src={Logo} alt="Logo" />
            </Link>
        </header>
    );
}

const headerStyle = {
    position: "fixed",
    left: "0",
    top: "0",
    background: "silver",
    padding: "10px",
    width: "100%",
    marginTop: "2.5 rem",
    marginBottom: "2.5 rem",
    zIndex: "2",
    textAlign: "center"
};

const logoStyle = {
    height: "83px",
    width: "150px",
    float: "center"
};
