import React, { Component } from 'react';
import "./Login.css";
class Login extends Component {
    render() {
        return (
          
            <div className="container">
            <div className="login-form">
                <form action="" method="post">
                    <h1>Đăng nhập</h1>
                    <div class="input-box">
                        <i ></i>
                        <input type="text" placeholder="Tên"></input>
                    </div>
                    <div className="input-box">
                        <i ></i>
                        <input type="password" placeholder="Mật khẩu"></input>
                    </div>
                    <div className="btn-box">
                        <button type="submit">
                            Đăng nhập
                        </button>
                    </div>

                    <div className="content-bottom">
                        <p>Bạn chưa có tài khoản? Đăng kí ngay</p>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Login;