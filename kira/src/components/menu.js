import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'

export class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/"><h2>KIRA</h2></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/themes">Projects</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>               
            </div>
        )
    }
}

export default Menu
