import React, { Component } from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
import Header from '../header'
import Login from '../login'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/header' component={Header}/>
                    <Route path='/login' component={Login}/>
                    <Redirect exact from='/' to='/header'/>
                </Switch>
                
            </div>
            
        )
    }
}
