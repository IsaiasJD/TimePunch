import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Layout from "../layout/Layout";

export default function Home(props) {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const { history } = props;

    function handleUser(event) {
        const { value } = event.target;
        setUser(value);
    }

    function handlePassword(event) {
        const { value } = event.target;
        setPassword(value);
    }

    function handleClick() {
        console.log(password, "password");
        console.log(user, "user");
        if (user === "admin" && password === "password") {
            history.push("/Admin");
        } else if (user === "username" && password === "password") {
            history.push("/Users");
        }
    }
    function handleKeyPress() {
        handleClick();
    }

    return (
        <Layout>
            <Card text="white" style={cardStyle}>
                <Card.Header>Welcome</Card.Header>
                <Card.Body>
                    <Card.Title>Please Log In</Card.Title>
                    <Card.Text>
                        <p style={btnStyle.p}>Username</p>
                        <input
                            type="username"
                            onChange={handleUser}
                            onKeyPress={handleKeyPress}
                        />
                        <p style={btnStyle.p}>Password</p>
                        <input
                            type="password"
                            onChange={handlePassword}
                            onKeyPress={handleKeyPress}
                        />
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>
                        Continue
                    </Button>
                </Card.Body>
            </Card>
        </Layout>
    );
}

const cardStyle = {
    width: "18rem",
    margin: "15% auto",
    float: "none",
    backgroundColor: "black",
    color: "white",
    padding: "2.5rem"
};

const btnStyle = {
    p: { padding: "5px", margin: "1px" }
};
