import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import './index.scss'
import Header from '../header/index.jsx'
export default class Main extends Component {
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
        axios.get('http://localhost:3003/zhihu').then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
    render() {
        const { stories, top_stories } = this.state
        return (
            <div className='main-box'>
                <div className='main-center'>
                    <Route exact path='/home' component={Header} />
                    {
                        stories && stories.map((item) => {
                            return <div key={item.id} style={{padding: '20px',marginBottom: '10px',backgroundColor: '#fff',borderBottom: '2px solid #E9E9E9'}}>
                                <p style={{fontSize: '20px'}}>{item.title}</p>
                                {
                                    item.images.map((item, index) => {
                                        return <img style={{marginTop: '10px'}} key={index} src={item}/>
                                    })
                                }
                            </div>
                        })
                    }
                    {
                        top_stories && top_stories.map((item) => {
                            return <div onClick={() => this.getDitail(item.id)} key={item.id} style={{padding: '20px',marginBottom: '10px',backgroundColor: '#fff',borderBottom: '2px solid #E9E9E9'}}>
                                <p style={{fontSize: '20px'}}>{item.title}</p>
                                <img style={{marginTop: '10px'}} width='200' src={item.image}/>
                            </div>
                        })
                    }
                    <div>
                        <div dangerouslySetInnerHTML={{
                            __html: this.state.body
                        }}></div>
                    </div>
                </div>
            </div>
        )
    }
    getDitail = (id) => {
        console.log(id)
        axios.get('http://localhost:3003/ditail', {params: {id}}).then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
}
