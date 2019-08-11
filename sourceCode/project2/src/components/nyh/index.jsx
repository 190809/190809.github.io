import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Zhuye from './zhuye/zhuye'
import Guanzhu2 from './guanzhu/guanzhu2'
import Guanzhu3 from './guanzhu/guanzhu3'
import './index.css'

export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Route path='/' exact component={Zhuye}/>
                    <Route path='/gzw' component={Guanzhu2}/>
                    <Route path='/wgz' component={Guanzhu3}/>
            </BrowserRouter>
        )
    }
}