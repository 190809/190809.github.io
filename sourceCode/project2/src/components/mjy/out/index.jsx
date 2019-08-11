import React, { Component } from 'react'
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'
// 引入样式
import './index.scss'
// 推荐
import Recommend from '../main/recommend.jsx'
// 生活
import Life from '../main/life.jsx'
// 教育
import Education from '../main/education.jsx'
// 娱乐
import Happy from '../main/happy.jsx'
// 汽车
import Car from '../main/car.jsx'
// 金融
import Money from '../main/money.jsx'
// 职场
import Work from '../main/work.jsx'
// 科技
import Science from '../main/science.jsx'
// 体育
import Sport from '../main/sport.jsx'
const list = [
    {url:'/recommend', content:Recommend, text:'推荐'},
    {url:'/life', content:Life, text:'生活'},
    {url:'/education', content:Education, text:'教育'},
    {url:'/happy', content:Happy ,text:'娱乐'},
    {url:'/car',content:Car, text:'汽车'},
    {url:'/money',content:Money, text:'金融'},
    {url:'/work',content:Work, text:'职场'},
    {url:'/science',content:Science, text:'科技'},
    {url:'/sport',content:Sport, text:'体育'}
]

export default class Mjy extends Component {
    render() {
        return (
            <div>
                <div className='mjy-header flex'>
                    <a href="/">
                        <img className='img-logo' src={ `${process.env.PUBLIC_URL}/images/header-logo.png` } alt='知乎' />
                    </a>
                    <div className='header-input flex'>
                        <p>
                            <i className='iconfont icon-sousuo'></i>
                        </p>
                        <input type="text" placeholder='搜索'/>
                    </div>
                    <div className='header-navlink'>
                        <NavLink to='/denglu'>注册或登录</NavLink>
                    </div>
                </div>
                <div className='mjy-header-router'>
                    <ul className='flex'>
                        {
                            list.map((item,index)=> {
                                return <li key={index}>
                                    <NavLink to={this.props.match.url+item.url}>{item.text}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <Switch>
                        {
                            list.map((item,index) => {
                                return <Route path={this.props.match.url+item.url} component={item.content} key={index}/>
                            })
                        }
                        <Redirect to='/out/recommend'/>
                    </Switch>
                    
                </div>
            </div>
        )
    }
}
