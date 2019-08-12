import React, { Component } from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
// 孙菲
import Down from '../sf/down'
import Main from '../sf/main'
// 百万
import Out from '../mjy/out/index.jsx'
// 聂一晗
import Zhuye from '../nyh/zhuye/zhuye'
import Guanzhu2 from '../nyh/guanzhu/guanzhu2'
import Guanzhu3 from '../nyh/guanzhu/guanzhu3'
// 杨金宁
import Denglu from '../yjn/index'
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
                    <Route path='/denglu' component={Denglu}/>
                    <Redirect to='/out'/>
                </Switch>
            </BrowserRouter>
        )
    }
}
