import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Layout from "../layout/Layout";

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Card bg="dark" text="white" style={cardStyle}>
                    <Card.Header>Welcome</Card.Header>
                    <Card.Body>
                        <Card.Title>Please Log In</Card.Title>
                        <Card.Text>
                            <p style={btnStyle.p}>Username</p>
                            <input
                                type="username"
                                // onChange={handleOnChange}
                                // onKeyPress={handleKeyPress}
                            />
                            <p style={btnStyle.p}>Password</p>
                            <input
                                type="password"
                                // onChange={handleOnChange}
                                // onKeyPress={handleKeyPress}
                            />

                            <Button>Continue</Button>
                            {/* <button onClick={handleClick}>Continue</button> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Layout>
        );
    }
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
