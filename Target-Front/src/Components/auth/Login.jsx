import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@chakra-ui/react'
import cookies, { loadAll } from "react-cookies";
function Login() {
  const { navigation } = useState()
  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

    
  const handelClick = () => {
    axios.post("http://localhost:8000/api/admin/login", { username, password }).then((res) => {
      // load page after login
      window.location.href = "/"
      cookies.save("token", res.data.token, { path: "/" })
    }).catch((err) => {
      console.log(err);
    })
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