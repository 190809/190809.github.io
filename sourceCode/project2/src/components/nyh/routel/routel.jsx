import React, { Component } from 'react'
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'

export default class Routel extends Component {
    render() {
        return (
            <div className='Routel'>
                <div className='flex'>
                    <NavLink activeClassName='Routel-a2' 
                    isActive={(match,location)=>{
                        if(match || location.pathname === '/'){
                            return true;
                        }
                        return false
                    }} 
                    className='Routel-a' to='/zhuye/one'>动态</NavLink>
                    <NavLink activeClassName='Routel-a2' className='Routel-a' to='/zhuye/two'>回答</NavLink>
                    <NavLink activeClassName='Routel-a2' className='Routel-a' to='/zhuye/three'>文章</NavLink>
                    <NavLink activeClassName='Routel-a2' className='Routel-a' to='/zhuye/four'>提问</NavLink>
                </div>
                <div>
                    <Route path='/zhuye/one' component={() => <One/>}/>
                    <Route path='/zhuye/two' component={() => <Two/>}/>
                    <Route path='/zhuye/three' component={() => <Three/>}/>
                    <Route path='/zhuye/four' component={() => <Four/>}/>
                </div>
            </div>
        )
    }
}



