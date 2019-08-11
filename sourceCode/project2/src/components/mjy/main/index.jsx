import React, { Component } from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
import Out from '../out'
import Login from '../../yjn/index'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/out' component={Out}/>
                    <Redirect exact from='/' to='/out'/>
                </Switch>
                
            </div>
            
        )
    }
}
