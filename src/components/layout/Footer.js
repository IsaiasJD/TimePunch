import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <Link to={"/"}>
                <h1>Footer</h1>
            </Link>
        </footer>
    );
}

const footerStyle = {
    padding: "20px",
    textAlign: "center",
    background: "#ddd",
    marginTop: "20px"
};
