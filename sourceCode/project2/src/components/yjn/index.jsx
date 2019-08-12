import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import './index.scss'
import Login from './login'
import Login2 from './login2'
import Register from './register'
export default class Html extends Component {
    constructor(){
        super()
    }
    // 点击右上角叉号跳到首页 记得改路由
    Loginclose = () => {
        console.log(1)
        window.location.replace('/out/recommend')
    }
    render() {
        return (
            <BrowserRouter>
                <header className='header'>
                    <img src={`${process.env.PUBLIC_URL}/images/yjn-header.png`}/>
                    <p onClick={this.Loginclose}>×</p>
                </header>
                <main>
                    <Route path='/denglu' exact component={Register}/>
                    <Route path='/denglu/register' component={Register}/>
                    <Route path='/denglu/login1' component={Login}/>     
                    <Route path='/denglu/login2' component={Login2}/>     
                </main>
            </BrowserRouter>
        )
    }
}
