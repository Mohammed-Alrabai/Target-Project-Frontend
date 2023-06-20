import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useColorModeValue,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  useDisclosure,
  Icon,
  Image,
} from "@chakra-ui/react";
import { HiUserGroup } from "react-icons/hi";
import axios, { isCancel } from "axios";
import { React, useState, useEffect } from "react";

// for push
const UsersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenChange, setIsModalOpenChange] = useState(false);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mydepartment, setDepartment] = useState("");
  const [userRole, setUserRole] = useState("");
  const [Emp, setGetEmp] = useState([]);
  const [depData, setDepData] = useState([]);


  //get all the data from backEnd API
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/admin/employee")
      .then((res) => {
        setData(res.data.result);
        setSearch(res.data.result);
        console.log("api data");
        console.log(res.data.result);
        console.log(data);
        //console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });


    axios
      .get("http://localhost:8800/api/department/DepartmentList")
      .then((res) => {
        setDepData(res.data.result);
        console.log("department");
        console.log(depData);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const color = useColorModeValue("gray.900", "gray.300");

  const DeleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8800/api/admin/deleteEmployee/${id}`)
      .then((res) => {
        setData(
          data.filter((del) => {
            return del._id != id;
          })
        );
        console.log("deleted");
      });
  };

  const AddEmployee = () => {
    console.log(userRole);
    console.log(department);
    axios
      .post("http://localhost:8800/api/admin/createEmployee", {
        name,
        username,
        password,
        mydepartment,
        userRole,
      })
      .then((res) => {
        setIsModalOpen(false);
        console.log("employee is added successfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const UpdateEmp = (id) => {
    axios
      .get(`http://localhost:8800/api/admin/employee/${id}`)
      .then((res) => {
        setGetEmp(res.data.result);
        console.log("the updated user is")
        console.log(res.data.result)
        console.log(id);

      });
  };

  const EditEmployee = (id) => {
    console.log("hhhhhhhhhhhhhh")
    console.log(mydepartment)
    axios
      .patch(`http://localhost:8800/api/admin/updateEmployee/${id}`, {
        name,
        username,
        password,
        mydepartment,
        userRole,
      })
      .then((res) => {
        console.log("updated!");
      });
  };

  const filterFunc = (event) => {
    console.log("the data inside");
    console.log(data);
    setSearch(
      data.filter(f =>
        f.name.toLowerCase().includes(event.target.value)
        // console.log(f.name)
      )
    );
  };

  return (
    <Box
      className="flex flex-col"
      minH="100vh"
      w={"full"}
      mx={"auto"}
      pr={{ base: [6], md: [14], lg: [8, 16] }}>
      <Box
        w={"full"}
        rounded={"md"}
        bg={useColorModeValue("white", "gray.900")}
        mx={[-6, -8]}
        my={[4]}>
        <Text fontSize={"2xl"} fontWeight={"bold"} px={6} py={6} w={"full"}>
          <Icon ml="2" as={HiUserGroup} />
          الموظفين
        </Text>
      </Box>
      <Box
        overflowX="auto"
        mx={[-6, -8]}
        pb={2}
        px={[6, 8]}
        w={"full"}
        rounded={"md"}
        bg={useColorModeValue("white", "gray.900")}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
          py={2}>
          <Box w={{ base: "full", md: "50%" }} px={6} py={6}>
            <Input
              placeholder="بحث"
              _placeholder={{ color: "gray.500", _active: true }}
              onChange={filterFunc}
            />
          </Box>
          <Box
            w={{ base: "full", md: "50%" }}
            px={6}
            py={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}>
            <Button onClick={() => setIsModalOpen(true)}>اضافة موظف</Button>
          </Box>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <Box display={"flex"} justifyContent={"space-between"} w={"full"}>
                <Box display={"flex"} justifyContent={"flex-start"}>
                  <ModalCloseButton />
                </Box>
                <Box>
                  <ModalHeader>نافذة إضافة موظف</ModalHeader>
                </Box>
              </Box>
              <ModalBody>
                <Box>
                  <Input
                    name="name"
                    placeholder="اسم الموظف"
                    mb={4}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    name="username"
                    placeholder="اسم المستخدم"
                    mb={4}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="كلمة المرور"
                    mb={4}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Select
                    name="Department"
                    placeholder="اختر القسم"
                    mb={4}
                    icon={<></>}
                    onChange={(e) => setDepartment(e.target.value)}>
                    {depData.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                  <Select
                    name="userRole"
                    placeholder="الصلاحيات "
                    mb={4}
                    icon={<></>}
                    onChange={(e) => setUserRole(e.target.value)}>
                    <option value="employee">موظف</option>
                    <option value="subAdmin">مدير قسم</option>
                  </Select>
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" ml={3} onClick={() => AddEmployee()}>
                  حفظ
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>إغلاق</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Table
          id="empTable"
          minW="full"
          textAlign="left"
          fontSize="sm"
          fontWeight="light"
          color={color}
          rounded={"md"}>
          <Thead borderBottomWidth="1px" fontWeight="extrabold">
            <Tr>
              <Th fontSize={"0.95rem"} px={6} py={6}>
                #
              </Th>
              <Th fontSize={"1.2rem"} fontWeight={"extrabold"} px={6} py={6}>
                الاسم
              </Th>
              <Th fontSize={"1.2rem"} fontWeight={"extrabold"} px={6} py={6}>
                القسم
              </Th>
              <Th fontSize={"1.2rem"} fontWeight={"extrabold"} px={6} py={6}>
                تعديل
              </Th>
              <Th fontSize={"1.2rem"} fontWeight={"extrabold"} px={6} py={6}>
                حذف
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {search.map((item) => (
                <Tr
                  borderBottomWidth="1px"
                  rounded={"md"}
                  key={item._id}
                  _hover={{ bg: "gray.100", _dark: { bg: "gray.800" } }}>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {item._id}
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {item.name}
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {
                      item.Department.name
                    }
                  </Td>
                  <Td whiteSpace="nowrap" px={4} py={0}>
                    <Button
                      colorScheme="blue"
                      outline={true}
                      onClick={() => {
                        UpdateEmp(item._id);
                        setIsModalOpenChange(true);
                      }}>
                      تعديل
                    </Button>
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    <Button
                      colorScheme="red"
                      outline={true}
                      onClick={() => DeleteUser(item._id)}>
                      حذف
                    </Button>
                  </Td>
                </Tr>
              ))}
            </>
            <Modal
              isOpen={isModalOpenChange}
              onClose={() => setIsModalOpenChange(false)}>
              <ModalOverlay />
              <ModalContent>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"full"}>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    <ModalCloseButton />
                  </Box>
                  <Box>
                    <ModalHeader>نافذة تعديل موظف</ModalHeader>
                  </Box>
                </Box>
                {Emp.map((emp) => (
                  <>
                    <ModalBody>
                      <>
                        <Input
                          name="name"
                          placeholder={emp.name}
                          mb={4}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                          name="username"
                          placeholder={emp.username}
                          mb={4}

                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                          name="password"
                          type="password"
                          placeholder="password"
                          mb={4}

                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Select
                          name="Department"
                          // placeholder={emp.department.name}
                          mb={4}
                          icon={<></>}
                          onChange={(e) => setDepartment(e.target.value)}>
                          {depData.map((item) => {
                            return (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </Select>
                        <Select
                          name="userRole"
                          placeholder="الصلاحيات "
                          onChange={(e) => setUserRole(e.target.value)}
                          mb={4}
                          icon={<></>}
                        // value={employeeData.department}
                        // onChange={handleChange1}>
                        >
                          <option value="employee">موظف</option>
                          <option value="subAdmin">مدير قسم</option>
                        </Select>
                      </>

                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        ml={3}
                        onClick={() => EditEmployee(emp._id)}>
                        حفظ
                      </Button>
                      <Button onClick={() => setIsModalOpenChange(false)}>
                        إغلاق
                      </Button>
                    </ModalFooter>
                  </>
                )
                )}
              </ModalContent>
            </Modal>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default UsersTable;
