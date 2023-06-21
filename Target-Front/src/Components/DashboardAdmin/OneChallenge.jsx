import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  chakra,
  SimpleGrid,
  useColorModeValue,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  Select,
  Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cookies from "react-cookies";
import axios from "axios";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [department, setDepartment] = useState("");
  const [challenge, setChallenge] = useState({});
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [bodyc, setbodyc] = useState("")
  const color = useColorModeValue("gray.50", " gray.900");

  const id = useParams().id;


  const api = `http://localhost:8000/api/admin/challenge/${id}`;
  const handleAddChallenge = async () => {

    onClose();
  };
  useEffect(() => {
    console.log("hoooo")
    axios.get(`http://localhost:8000/api/employee/ChallengeById/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).then((res) => {
      setData(res.data);
      console.log("the challange data is")
      console.log(res.data)
      setTitle(res.data.result.title)
      setBody(res.data.result.body)
      console.log("the body is")
      console.log(res.data.result.body)
      setCreateAt(res.data.result.createdAt)
      console.log(res.data.result.title);
    }).catch((err) => {
      console.log(err);
    })

    ////////comment api

    axios.get(`http://localhost:8000/api/employee/CommentChallengeById/${id}`, {
      headers: {
        'authorization': `bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      console.log("this issss commmenttt")
      console.log(res.data.reponse.comments)
      setComment(res.data.reponse.comments)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  ///add comment by employee
  const addComment = () => {
    const token = localStorage.getItem("token")
    console.log(token)
    console.log("commentsss")
    axios.post(`http://localhost:8000/api/employee/CreateComment/${id}`,
      {
        bodyc
      }, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    }
    ).then((res) => {
      console.log("comment is added")
    }).catch((error) => {
      console.log(error)
    })
  }

  const isUser = localStorage.getItem("username");

  return (
    <>
      <Box display={"flex"} w={"full"} minH={"100vh"}>
        <SimpleGrid w={"100%"} columns={{ base: 1, md: 1, lg: 1 }} gap={0}>
          {/* Box-1 */}
          <Box>
            <Box
              mt={0}
              borderBottom={"2px solid"}
              borderStyle={"solid"}
              borderColor={useColorModeValue("gray.300", "gray.700")}
            >
              <Box
                mx="auto"
                px={8}
                py={4}
                shadow="lg"
                bg="white"
                _dark={{ bg: "gray.800" }}>
                <Flex justifyContent="space-between">
                  <Link
                    color="gray.700"
                    _dark={{ color: "gray.200" }}
                    fontWeight="700"
                    cursor="pointer"></Link>
                  <chakra.span
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}>
                    {createAt}
                  </chakra.span>
                </Flex>
                <Box mt={2}>
                  <Link
                    fontSize="2xl"
                    color="gray.700"
                    _dark={{ color: "white" }}
                    fontWeight="700"
                    _hover={{
                      color: "gray.600",
                      _dark: {
                        color: "gray.200",
                      },
                      textDecor: "underline",
                    }}>
                    {title}
                  </Link>
                  <chakra.p
                    mt={2}
                    color="gray.600"
                    _dark={{ color: "gray.300" }}>
                    {body}
                  </chakra.p>
                </Box>
                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                  <Flex alignItems="center">
                    <Link
                      px={3}
                      py={1}
                      bg="gray.600"
                      color="gray.100"
                      fontSize="sm"
                      fontWeight="700"
                      rounded="md"
                      _hover={{ bg: "gray.500" }}>
                      عاجل
                    </Link>
                  </Flex>
                </Flex>


              </Box>
              <Box display={"flex"} gap={0} alignItems={"center"}>
                <Textarea rounded={0} bg={"white"} placeholder="تعليق" onChange={(e) => setbodyc(e.target.value)} />
                <Button
                  rounded={0}
                  bg={"#7fa084"}
                  _hover={{ bg: "#6F9475" }}
                  w={"25%%"}
                  h={"80px"}
                  onClick={addComment}>
                  اضافة تعليق{" "}

                </Button>
              </Box>
              {/* comment box */}
              {comment.map(c => {
                return (
                  <Box px={8}
                    py={4}
                    shadow="lg"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    key={c._id}>

                    <Flex justifyContent="space-between">
                      <Link
                        color="gray.700"
                        _dark={{ color: "gray.200" }}
                        fontWeight="700"
                        cursor="pointer"></Link>
                      <chakra.span
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}>

                      </chakra.span>
                    </Flex>
                    <Box mt={2}>
                      <Text
                        fontSize="2xl"
                        color="gray.700"
                        _dark={{ color: "white" }}
                        fontWeight="700"
                      >


                      </Text>
                      <chakra.p
                        mt={2}
                        color="gray.600"
                        _dark={{ color: "gray.300" }}>
                        {c.body}
                      </chakra.p>
                    </Box>
                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                      <Flex alignItems="center">

                      </Flex>
                    </Flex>
                  </Box>

                )
              })}

            </Box>
          </Box>
          {/* for employee */}
          {/* add comment */}
          {/* <Box>
            <Box bg={color} _dark={{ bg: "gray.800" }} p={4}>
              <Box>
                <Textarea placeholder=" تعليق" />
              </Box>
              <Box mt={4}>
                <Button onClick={handleAddChallenge}>اضافة تعليق جديد</Button>
              </Box>
            </Box>
            <hr />
          </Box> */}

          {/* <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box> */}
        </SimpleGrid>
        <Box
          w={"400px"}
          bg={"#f5f4f1"}
          display={{ base: "none", lg: "block" }}
          border="1px"
          bgColor={useColorModeValue("#f5f4f1", "gray.800")}
          borderColor={useColorModeValue("gray.200", "gray.700")}>
          <Box p={4}>
            <Input type="text" placeholder="بحث" />
          </Box>
          <Box
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%">
            {isUser ? (
              <></>
            ) : (
              <Button
                colorScheme="blue"
                alignItems={"center"}
                display={"flex"}
                w={"100%"}
                onClick={onOpen}>
                اضافة تحدي جديد
              </Button>
            )}
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>إضافة تحدي جديد</ModalHeader>
                <ModalBody>
                  <Input
                    type="text"
                    placeholder="أدخل عنوان التحدي"
                    value={title}
                    mb={4}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Textarea
                    type="text"
                    placeholder="أدخل موضوع التحدي"
                    value={body}
                    mb={4}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <Select
                    icon={""}
                    ml={8}
                    colorScheme="blue"
                    w={"170px"}
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="اختر القسم">
                    <option value="public">عام</option>
                    <option value="المالية">المالية</option>
                    <option value="تقنية المعلومات">تقنية المعلومات</option>
                    <option value="المشتريات">المشتريات</option>
                    <option value="التسويق">التسويق</option>
                    <option value="المشتريات">المشتريات</option>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button
                    ml={4}
                    colorScheme="blue"
                    onClick={handleAddChallenge}>
                    إضافة
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    إلغاء
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
    </>
  );
}
