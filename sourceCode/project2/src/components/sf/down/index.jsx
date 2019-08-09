import React, { Component } from 'react'
import './index.scss'
export default class Down extends Component {
    render() {
        return (
            <div className='down-box'>
                <div className='down-header'>
                    <img src="/images/zhihu-logo.png" className='logo'/>
                    <div className='top'>
                        <p>有问题，上知乎</p>
                        <p>可信赖的问答社区</p>
                    </div>
                    <button className='btn-down'>下载 App</button>
                </div>
                <div className='footer'></div>
            </div>
        )
    }
}
