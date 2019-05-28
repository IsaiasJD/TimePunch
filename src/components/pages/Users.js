import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Layout from "../layout/Layout";

export default class Users extends Component {
    render() {
        return (
            <Layout>
                <Card text="white" style={cardStyle}>
                    <Card.Header>Welcome User</Card.Header>
                    <Card.Body>
                        <Card.Title />
                        <Card.Text />
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
