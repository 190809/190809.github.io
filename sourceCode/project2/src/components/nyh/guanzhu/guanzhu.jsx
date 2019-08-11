import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Guanzhu extends Component {
    render() {
        return (
            <div className='Guanzhu flex'>
                <NavLink className='gzw' to='/gzw'>0  关注我的人</NavLink>
                <NavLink className='wgz' to='/wgz'>0  我关注的人</NavLink>
            </div>
        )
    }
}
