import { useState } from "react"

import React from "react"
import axios from "axios"
import './login.css'


export default function Login(props) {
    let [name, setname] = useState("")
    let [password, setpassword] = useState("")

    let [login, setlogin] = useState("")

    function handlename(event) {
        setname((name = event.target.value));

    }

    function handlepassword(event) {
        setpassword((password = event.target.value));
    }


    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "user/login",
            params: { name: name, password: password }
        })
            .then((res => {
                console.log(res.data)
                if (res.data == "authenticated") {
                    props.handleLogin()
                //    localStorage.setItem("isLoggedln",true) 
                }
                else {

                    alert(res.data)
                }
            }))

    }

    return (

        <div class='wrap'>
              Login
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    id='username'
                    name="name"
                    placeholder="Username"
                    onChange={handlename}
                />

                <input
                    type="password"
                    value={password}
                    name="password"
                    id='password'
                    placeholder=" password"
                    onChange={handlepassword}
                />
                <button class='forgot'>FORGOT PASSWORD ?</button> <button  type="submit"
                    value="submit" class='login'>LOG IN</button>
                {/* <input class='login' type="submit"
                    value="submit"
                /> */}
            </form>
      
           

        </div>
    )
}