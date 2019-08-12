import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Zhuye from './zhuye/zhuye'
import Guanzhu2 from './guanzhu/guanzhu2'
import Guanzhu3 from './guanzhu/guanzhu3'

export default class Html extends Component {
    render() {
        return (
            <div>
                <Route path='/zhuye' component={Zhuye}/>
                <Route path='/gzw' component={Guanzhu2}/>
                <Route path='/wgz' component={Guanzhu3}/>
            </div>
        )
    }
}