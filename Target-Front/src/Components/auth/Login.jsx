import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@chakra-ui/react'
import cookies, { loadAll } from "react-cookies";
function Login() {
  const { navigation } = useState()
  const [user, setUser] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const handelClick = () => {

    if (username === "admin") {
      axios
        .post("http://localhost:8000/api/admin/login", {
          username,
          password,
        })
        .then((res) => {
          // load page after login
          window.location.href = "/";
          localStorage.setItem("token", res.data.token)
          console.log("this is admin")
          // cookies.save("token", res.data.token, { path: "/" });
          // localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/api/employee/emplogin", {
          username,
          password,
        })
        .then((res) => {

          // load page after login
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("username", res.data.result.username)
          console.log("the userData")
          console.log(res.data)
          console.log(res.data.result.username)

          // cookies.save("token", res.data.token, { path: "/" });
          // cookies.save("username", res.data.username, { path: "/" });
          // localStorage.setItem("token", res.data.token);
          window.location.href = "/";

          if (localStorage.getItem("username")) {
            setUser(true)
          } else {
            setUser(false)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handelClick} >login</Button>
    </>
  )
}

export default Login