import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

import Main from '../mjy/main/index.jsx'

export default class Html extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path='/' component={Main}/>
                </BrowserRouter>
            </div>
        )
    }
}
