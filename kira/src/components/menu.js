import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { ThemeLayout } from './themes/theme.layout';
import Backlog from './Backlog';
import HomePage from './home/HomePage';
import { InitiativesLayout } from './initiatives/initiative.layout';
import StoryLayout from './stories/story.layout'


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
                        <Link to='/themes'>My Projects</Link>
                        <Link className='ml-3' to='/initiatives'>Initiatives</Link>
                        <Link className='ml-3' to='/backlog'>Backlog</Link>
                    </Nav>
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
                    <Route exact path="/backlog/:id">
                        <Backlog/>
                    </Route>
                    <Route path="/epics/:id" children={<StoryLayout />}/>
                </Switch>
            </div>
            </Router>

            
        )
    }
}

export default Menu
