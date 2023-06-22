import {
  Box,
  Flex,
  Text,
  Link,
  Checkbox,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";
import cookies, { loadAll } from "react-cookies";

const Todo = () => {
  const color = useColorModeValue("#f5f4f1", "gray.900");
  const [goals, setGoals] = useState([]);
  const [bodyGoals, setBodyGoals] = useState([]);
  const api = "https://target-zgr6.onrender.com/api/admin/goals";

  useEffect(() => {
    axios.get(api , {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).then((res) => {
      setGoals(res.data.result);
      console.log(res.data);
      const { body } = res.data.result[0];
      console.log(body);
      const bodyS = body.split("-");
      console.log(bodyS);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  // create a new goal
  const [goal, setGoal] = useState({});
  const [body, setBody] = useState("");
  const apiCreate = "https://target-zgr6.onrender.com/api/admin/createGoal";

  const createGoal = () => {
    axios.post(apiCreate, {
      body,
      headers : {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }
    ).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  //
  return (
    <Box as="main" p={{ base: "4", md: "6" }} w={"full"}>
      {/* Breadcrumb */}
      <Flex
        as="section"
        display={"flex"}
        alignItems={"center"}
        p={{ base: "4", md: "8" }}
        rounded={"md"}
        justifyContent={"space-between"}
        bg={color}>
        <Box>
          <Text fontSize={"2xl"}>الاهداف</Text>
        </Box>
        <Flex display={"flex"} flexWrap={"wrap"} gap={2} alignItems={"center"}>
          {/* Search */}
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Input w={"full"} placeholder="بحث" />
          </Box>
          {/* Add New */}
          <Button
            bg={"#7fa084"}
            color={"white"}
            _hover={{ bg: "#6F9475" }}
            onClick={createGoal}>
            اضافة
          </Button>
        </Flex>
      </Flex>

      {/* To Do */}
      <Flex display={"flex"} flexDirection={"column"} gap={1}>
        <Box p={6} position={"relative"} bg={color}>
          <Text mb={4} fontSize={"lg"}>
            الاهداف العامة{" "}
          </Text>
          <Flex
            position={{ lg: "absolute", base: "static" }}
            top={0}
            right={0}
            left={0}
            alignItems={"center"}
            justifyContent={"end"}
            textAlign={"right"}>
            <Button colorScheme="red" variant="outline" ml={2}>
              <Icon as={AiOutlineDelete} />
            </Button>
            <Button
              colorScheme="blue"
              ml={8}
              variant={"outline"}
              className="btn btn-icon btn_outlined btn_danger ltr:ml-2 rtl:mr-2">
              <Icon as={IoMdAdd} />
            </Button>
          </Flex>
          <Table display={"inline"} w={"full"}>
            <Thead>
              <Tr>
                <Th textAlign="right" p={2} fontSize={"sm"}>
                  الاهداف الرئيسية
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {goals.map((goal) => (
                <Tr>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>{goal.title}</Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td>
                  <Input
                    w={"full"}
                    minW={"200px"}
                    type="text"
                    on
                    placeholder="اضافة هدف جديد"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* To Do */}

        <Box p={6} position="relative" bg={color}>
          <Text mb={4} fontSize="lg">
            الاهداف الخاصة{" "}
          </Text>
          <Flex
            position={{ lg: "absolute", base: "static" }}
            top={0}
            right={0}
            left={0}
            p={2}
            alignItems="center"
            justifyContent="flex-end"
            textAlign="right">
            {/* Dropdown Menu */}
            <Select
              icon={""}
              ml={8}
              colorScheme="blue"
              w={"170px"}
              placeholder="اختر القسم">
              <option value="option1">المالية</option>
              <option value="option2">تقنية المعلومات</option>
              <option value="option3">المشتريات</option>
              <option value="option3">التسويق</option>
              <option value="option3">المشتريات</option>
            </Select>
          </Flex>
          <Table display="inline" w="full">
            <Thead>
              <Tr>
                <Th textAlign="right" p={2} fontSize="sm">
                  الاهداف الرئيسية
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {goals.map((goal) => (
                <Tr>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>{goal.title}</Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td>
                  <Input
                    w={"full"}
                    minW={"200px"}
                    type="text"
                    on
                    placeholder="اضافة هدف جديد"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default Todo;
