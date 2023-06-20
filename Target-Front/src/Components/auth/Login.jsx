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
    if (username === "admin") {
          axios
            .post("http://localhost:8000/api/admin/login", {
              username,
              password,
            })
            .then((res) => {
              // load page after login
              window.location.href = "/";
              cookies.save("token", res.data.token, { path: "/" });
              localStorage.setItem("token", res.data.token);
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
          window.location.href = "/";
          cookies.save("token", res.data.token, { path: "/" });
          cookies.save("username", res.data.result.username, { path: "/" });
          localStorage.setItem("token", res.data.token);
          if (cookies.get("username")) {
            const isUser = true;
          }else {
            const isUser = false;
          }
          setUser(isUser)
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