import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { ThemeLayout } from './themes/theme.layout';
import Backlog from './initiatives/Backlog';
import HomePage from './home/HomePage';
import { InitiativesLayout } from './initiatives/initiative.layout';


export class Menu extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="" variant="dark">
                    <Navbar.Brand>
                        <Link to='/'>KIRA</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to='/themes'>Project</Link>
                        <Link className='ml-3' to='/initiatives'>Initiatives</Link>
                        <Link className='ml-3' to='/backlog'>Backlog</Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar> 

                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/themes">
                        <ThemeLayout/>
                    </Route>
                    <Route exact path="/initiatives">
                        <InitiativesLayout/>
                    </Route>
                    <Route exact path="/backlog">
                        <Backlog/>
                    </Route>
                </Switch>
            </div>
            </Router>

            
        )
    }
}

export default Menu
