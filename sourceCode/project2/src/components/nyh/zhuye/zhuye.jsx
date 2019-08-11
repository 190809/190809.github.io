import React, { Component } from 'react'
import '../index.css'
import Routel from '../routel/routel'
import Guanzhu from '../guanzhu/guanzhu'

export default class Html extends Component {
    render() {
        return (
            <div className='Nyh'>
                <div className='Nyh-one'>
                    <div className='N-o-i'></div>
                </div>
                <div className='Nyh-tou'>
                    <img src="https://pic1.zhimg.com/v2-717654bb5447fbd840a3e2e4cfe9ea08_xl.jpg" alt=""/>
                    <div className='nicheng'>尼古拉斯</div>
                    <div className='qianming'> 太累了</div>
                </div>
                <div className='Nyh-content'>
                    <Guanzhu />
                </div>
                <div className='Nyh-two'>
                    <Routel/>
                </div>
            </div>
        )
    }
}

