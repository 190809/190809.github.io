import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Down from '../sf/down'
import Main from '../sf/main'
import Out from '../mjy/out/index.jsx'
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/down' component={Down} />
                    <Route path='/home' component={Main} />
                    <Route path='/out' component={Out} />
                    <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        )
    }
}
