import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Link,
  Stack,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";
import cookies, { loadAll } from "react-cookies";
import herobg from "../../assets/img/hero.svg";
function Login() {
  const { navigation } = useState();
  const [user, setUser] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showAlert, setShowAlert] = useState(false);

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
          localStorage.setItem("token", res.data.token);
          console.log("this is admin");
          // cookies.save("token", res.data.token, { path: "/" });
          // localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          if (err) {
            setShowAlert(true);
          }
        });
    } else {
      axios
        .post("http://localhost:8000/api/employee/emplogin", {
          username,
          password,
        })
        .then((res) => {
          // load page after login
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.result.username);
          console.log("the userData");
          console.log(res.data);
          console.log(res.data.result.username);

          // cookies.save("token", res.data.token, { path: "/" });
          // cookies.save("username", res.data.username, { path: "/" });
          // localStorage.setItem("token", res.data.token);
          window.location.href = "/";

          if (localStorage.getItem("username")) {
            setUser(true);
          } else {
            setUser(false);
          }
        })
        .catch((err) => {
          if (err) {
            setShowAlert(true);
          }
        });
    }
  };
  return (
    <>
      {showAlert && (
        <>
          <Box position={"absolute"} top={10} right={10} >
            <Alert status="error">
              <AlertIcon />
              اسم المستخدم او كلمة المرور غير صحيح
            </Alert>
          </Box>
        </>
      )}
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              تسجيل الدخول الى حسابك
            </Heading>
            <FormControl id="email">
              <FormLabel>اسم المستخدم</FormLabel>
              <Input
                _focusVisible={{ border: "1px solid #7FA084" }}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>كلمة المرور</FormLabel>
              <Input
                _focusVisible={{ border: "1px solid #7FA084" }}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox colorScheme="green">تذكرني</Checkbox>
              </Stack>
              <Button
                bg={"#7FA084"}
                color={"white"}
                _hover={{ bg: "#6F9475" }}
                variant={"solid"}
                onClick={handelClick}>
                تسجيل الدخول
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Image alt={"Login Image"} objectFit={"cover"} src={herobg} />
        </Flex>
      </Stack>
      {/* _____________________________________________________________________ */}
    </>
  );
}

export default Login;
