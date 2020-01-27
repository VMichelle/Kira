import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import store from 'redux/store.js';
import { Provider } from 'react-redux';
import history from 'redux/history.js';

import { ThemeLayout } from './themes/theme.layout'

export default class AppRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path={`${window.baseUrl}themes`} component={ThemeLayout} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
