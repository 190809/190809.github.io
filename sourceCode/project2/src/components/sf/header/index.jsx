import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            bgiChange: true,
            isToggleOn: true,
            display: 'none'
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange = () => {
        this.setState({
            bgiChange: !this.state.bgiChange,
            isToggleOn:!this.state.isToggleOn,
            display: this.state.isToggleOn ? 'block': 'none'
        })
    }
    render() {
        const bgi = {
            url: this.state.bgiChange ? 'url(/images/menu.png)' : 'url(/images/xxx.png)'
        }
        return (
            <div className='header-box'>
                <div className='header-center flex'>
                    <a className='header-left' href="/"></a>
                    <div className='flex header-right'>
                        <div className='flex search'>
                            <p className='p-box'><i className='iconfont icon-search'></i></p>
                            <input className='search-input' type="text" placeholder='搜索'/>
                        </div>
                        <NavLink className='down' to="/down">下载 App</NavLink>
                        <span className='span'>|</span>
                        <div className='menu' style={{backgroundImage: bgi.url}} onClick={this.onChange}></div>
                    </div>
                </div>
                <div className='hide' style={{display: this.state.display}}>
                    <div className='hide-center'>
                        <ul className='h-c-ul'>
                            <li className='h-c-u-item'>
                                <NavLink to='/home'>
                                    <i className='iconfont icon-wenben'></i>
                                    <span>首页</span>
                                </NavLink>
                            </li>
                            <li className='h-c-u-item'>
                                <NavLink to='/mine'>
                                    <i className='iconfont icon-lianxiren'></i>
                                    <span>我的主页</span>
                                </NavLink>
                            </li>
                            <li className='h-c-u-item'>
                                <NavLink to='/out'>
                                    <i className='iconfont icon-tuichu'></i>
                                    <span>退出账号</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
