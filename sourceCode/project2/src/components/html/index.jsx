import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
import { BrowserRouter,Route } from 'react-router-dom'

import Main from '../mjy/main/index.jsx'

export default class Html extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path='/' component={Main}/>
                </BrowserRouter>
            </div>
>>>>>>> 9527ea271419b6fe5f5ad7f8815fe1dbf2780377
        )
    }
}
