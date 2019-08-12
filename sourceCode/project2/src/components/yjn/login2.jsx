import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    // 初始state.3.
    this.state = {
      phone: "",
      passWord: ""
    };
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
    //验证手机号
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    const regemail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    if ((this.state.phone === "" || !reg.test(this.state.phone)) && !regemail.test(this.state.phone)) {
      return alert("请输入正确的手机号💗");
    }
    // 验证密码
    if (this.state.passWord.length < 6 || this.state.passWord.length > 16) {
      return alert("密码要6~16位哦⛄");
    }
    //成功
    alert("登录成功")
    // 登陆成功后跳转到响应页面
    window.location.replace('/home')
  };
  // 点击跳转到注册
  Register=()=>{
    window.location.replace('/denglu/register')
  }
  // 点击跳转到登录1
  ToLogin1=()=>{
    window.location.replace('/denglu/login1')
  }
  render() {
    const{phone,passWord} = this.state
    return (
      <div>
        <div className='yjnmain'>
        <div className='loginbox'>
            {/* 登录页面 */}
            <ul>
                <li>
                <select className='sel'>
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
                        className='dl-int'
                        name="phone"
                        value={phone}
                        onChange= {this.onHandleChange}
                        placeholder=' 输入手机号'/>
                </li>
                <li>
                    <input type="password"
                        className='dl-int'
                        name="passWord"
                        value={passWord}
                        onChange={this.onHandleChange}
                        placeholder=' 输入密码'/>
                </li>
            </ul>
        </div>
        </div>
          <img className='yjnimg1' src={`${process.env.PUBLIC_URL}/images/yjn-zhihuxieyi.png`}/>
          <img onClick={this.tijiao} className='yjnimg2' src={`${process.env.PUBLIC_URL}/images/yjn-denglu.png`}/>
          <div className='loginp'>
              <p className='p1' onClick={this.Register}>免密码登录 &nbsp;&nbsp;·</p>
              <p className='p1' onClick={this.ToLogin1}>邮箱登录</p>
              <p className='p3'>需要帮助</p>
          </div>
      </div>  
    )
  }
}
