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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from "react-cookies";

export default function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [challenge, setChallenge] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  const api = "https://target-zgr6.onrender.com/api/admin/challenge/";
  const apiCreate =
    "https://target-zgr6.onrender.com/api/admin/createChallenge";

  const handleAddChallenge = async () => {
    const newChallenge = {
      title,
      body,
    };

    try {
      await axios.post(apiCreate, newChallenge);
      setChallenge([...challenge, newChallenge]);
      setSearch([...search, newChallenge]);
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data.result);
      setSearch(res.data.result);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(
      data.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };

  const isUser = cookies.load("username");

  return (
    <>
      <Box display={"flex"} w={"full"} justifyContent={"space-between"}>
        <SimpleGrid w={"100%"} columns={{ base: 1, md: 1, lg: 1 }} gap={0}>
          {/* Box-1 */}
          <Box>
            {search.map((item) => (
              <Box
                key={item._id}
                mt={0}
                borderBottom={"2px solid"}
                borderStyle={"solid"}
                borderColor={"gray.300"}
                _dark={{ borderColor: "gray.700" }}>
                <Box
                  mx="auto"
                  px={8}
                  py={4}
                  shadow="lg"
                  bg="white"
                  _dark={{ bg: "gray.800" }}>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Link
                      color="gray.700"
                      _dark={{ color: "gray.200" }}
                      fontWeight="700"
                      cursor="pointer">
                      {item.title}
                    </Link>
                    <chakra.span
                      fontSize="sm"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}>
                      {item.createdAt
                        ? item.createdAt
                            .slice(0, 10)
                            .replace("-", "/", 2)
                            .replace("-", "/", 2)
                        : ""}
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
                      {item.title}
                    </Link>
                    <chakra.p
                      mt={2}
                      color="gray.600"
                      _dark={{ color: "gray.300" }}>
                      {item.body}
                    </chakra.p>
                  </Box>

                  <Flex justifyContent="left" alignItems="center" mt={4}>
                    <Link
                      color="brand.600"
                      _dark={{ color: "brand.400" }}
                      _hover={{ textDecor: "underline" }}>
                      <Button
                        bg={"#8FAC93"}
                        _hover={{ bg: "#7FA084" }}
                        onClick={() => navigate(`/challenge/${item._id}`)}
                        color={"white"}>
                        اقراء المزيد
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Box>
        </SimpleGrid>
        <Box
          w={"400px"}
          bg={"#F5F4F1"}
          display={{ base: "none", lg: "block" }}
          border="1px"
          bgColor={useColorModeValue("#F5F4F1", "gray.800")}
          borderColor={useColorModeValue("gray.200", "gray.700")}>
          <Box p={4}>
            <Input
              type="text"
              placeholder="بحث"
              _focusVisible={{ borderColor: "#8FAC93" }}
              onChange={handleSearch}
            />
            {isUser ? (
              <></>
            ) : (
              <Button
                bg={"#8FAC93"}
                _hover={{ bg: "#7FA084" }}
                color={"white"}
                alignItems={"center"}
                display={"flex"}
                w={"100%"}
                onClick={onOpen}>
                اضافة تحدي جديد
              </Button>
            )}
          </Box>
          <Box
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%">
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent bg={"#F5F4F1"} _dark={{ bg: "gray.700" }}>
                <ModalHeader>إضافة تحدي جديد</ModalHeader>
                <ModalBody>
                  <Input
                    _focusVisible={{ borderColor: "#8FAC93" }}
                    type="text"
                    placeholder="أدخل عنوان التحدي"
                    value={title}
                    mb={4}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Textarea
                    type="text"
                    _focusVisible={{ borderColor: "#8FAC93" }}
                    placeholder="أدخل موضوع التحدي"
                    value={body}
                    mb={4}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    ml={4}
                    bg={"#8FAC93"}
                    _hover={{ bg: "#7FA084" }}
                    color={"white"}
                    onClick={handleAddChallenge}>
                    إضافة
                  </Button>
                  <Button onClick={onClose} colorScheme="red">
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
