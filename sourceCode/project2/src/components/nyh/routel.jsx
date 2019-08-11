import React, { Component } from 'react'
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'

export default class Routel extends Component {
    render() {
        return (
            <BrowserRouter className='Routel'>
                <div>
                    <NavLink to='/one'>one</NavLink>
                    <NavLink to='/two'>two</NavLink>
                    <NavLink to='/three'>three</NavLink>
                    <NavLink to='/four'>four</NavLink>
                </div>
                <div>
                    <Route path='/' exact component={() => <One/>}/>
                    <Route path='/one' component={() => <One/>}/>
                    <Route path='/two' component={() => <Two/>}/>
                    <Route path='/three' component={() => <Three/>}/>
                    <Route path='/four' component={() => <Four/>}/>
                </div>
            </BrowserRouter>
        )
    }
}
