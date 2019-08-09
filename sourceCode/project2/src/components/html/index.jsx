import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Down from '../sf/down'
import Main from '../sf/main'
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/down' component={Down} />
                    <Route path='/home' component={Main} />
                    <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        )
    }
}
