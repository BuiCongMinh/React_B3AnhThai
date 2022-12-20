import React from 'react'
import { useNavigate } from 'react-router-dom';

function SingIn() {

    const useNavi = useNavigate()  // Phải khai báo bên ngoài function component ko được khai báo bên trong funtion chức năng )

    function singIn(){
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        if(!email || !password ) {
            return alert('chưa nhập email hoăc mật khẩu! ')
        }

        useNavi('/') 

    }

    return (
        <div>
            SingIn
            email:  <input type="text" id='email' />; <br />
            password:  <input type="text" id='password' />;
            <button onClick={singIn}>Đăng nhập</button>
        </div>
    )
}

export default SingIn