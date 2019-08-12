import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            yzm:"",
            phone:""
        }
    }
  // onchange事件
  onHandleChange = event => {
    let { target } = event;
    console.log(target.value);
    // 赋值的时候用es6对象新特性去做
    this.setState({
      [target.name]: target.value
    });
  };
  // 点击提交验证
  tijiao = () => {
    //验证手机账号
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (this.state.phone === "" || !reg.test(this.state.phone)) {
      return alert("请输入正确的手机号💗");
    }
    // 验证密码
    if (this.state.yzm.length < 6 || this.state.yzm.length > 16) {
      return alert("请输入正确的6位验证码哦⛄");
    }
    //成功
    alert("注册并登录成功")
    // 登陆成功后跳转到响应页面
    window.location.replace('/home')
  };
    // 点击跳转到登录
    ToLogin = () => {
        window.location.replace('/denglu/login1')
    }
    // 点击获取验证码弹出提示
    yjnyzm = () => {
            //验证手机账号
            const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (this.state.phone === "" || !reg.test(this.state.phone)) {
            return alert("请输入正确的手机号💗");
            }
        alert('验证码已发送，请再60s内输入')
    }
    render() {
        const{yzm,phone} = this.state
        return (
            <div>
            <div className='yjnmain'>
            <div className='zcbox'>
                        <ul className='ul'>
                            <li style={{marginBottom:'10px'}}>
                                <select className='sel' style={{background:'white'}}>
                                    <option>+86</option>
                                    <option>+81</option>
                                    <option>+852</option>
                                    <option>+853</option>
                                    <option>+886</option>
                                    <option>+60</option>
                                    <option>+61</option>
                                    <option>+1</option>
                                </select> 
                                <input type="text"
                                name='phone'
                                value={phone}
                                onChange={this.onHandleChange}
                                placeholder='输入手机号'/>
                            </li>
                            <li style={{float:'left',width:'75%'}}>
                            <input type="text"
                                name='yzm'
                                value={yzm}
                                onChange={this.onHandleChange}
                                placeholder='输入6位验证码'/>
                            </li>
                            <button className='zcyzm' onClick={this.yjnyzm}>发送验证码</button>
                        </ul>        
            </div>
            </div>
                <img className='yjnimg1' src={`${process.env.PUBLIC_URL}/images/yjn-zhihuxieyi.png`}/>
                <img onClick={this.tijiao} className='yjnimg2' src={`${process.env.PUBLIC_URL}/images/yjn-denglu.png`}/>
                <div className='zcp'>
                    <p className='p1' onClick={this.ToLogin}>密码登录</p>
                    <p className='p2'>需要帮助</p>
                </div>
            </div>
        )
    }
}