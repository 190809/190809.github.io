import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Down from '../sf/down'
import Main from '../sf/main'
import Out from '../mjy/out/index.jsx'
import Zhuye from './zhuye/zhuye'
import Guanzhu2 from './guanzhu/guanzhu2'
import Guanzhu3 from './guanzhu/guanzhu3'
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/down' component={Down} />
                    <Route path='/home' component={Main} />
                    <Route path='/out' component={Out} />
                    <Route path='/zhuye' component={Zhuye}/>
                    <Route path='/gzw' component={Guanzhu2}/>
                    <Route path='/wgz' component={Guanzhu3}/>
                    <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        )
    }
}
