import React, { useState, useEffect } from "react";
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
  Icon,
  Alert,
  AlertIcon,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HiUserGroup } from "react-icons/hi";
import axios from "axios";
import Swal from "sweetalert2";

const UsersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalChange, setIsModalChange] = useState(false);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mydepartment, setDepartment] = useState("");
  const [userRole, setUserRole] = useState("");
  const [Emp, setEmp] = useState([]);
  const [depData, setDepData] = useState([]);
  const [showAlertCreate, setShowAlertCreate] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure({
    defaultIsOpen: true,
  });

  useEffect(() => {
    axios
      .get("https://target-zgr6.onrender.com/api/admin/employee")
      .then((res) => {
        setData(res.data.result);
        setSearch(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://target-zgr6.onrender.com/api/department/DepartmentList")
      .then((res) => {
        setDepData(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const color = useColorModeValue("gray.900", "gray.300");

  const DeleteUser = (id) => {
    const alert = Swal.fire({
      title: "هل انت متاكد من عملية الحذف ؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonColor: "#6F9475",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://target-zgr6.onrender.com/api/admin/deleteEmployee/${id}`
          )
          .then(() => {
            setData((prevData) => prevData.filter((del) => del._id !== id));
            setSearch((prevSearch) => prevSearch.filter((del) => del._id !== id));
            setShowAlertDelete(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const AddEmployee = () => {
    axios
      .post("https://target-zgr6.onrender.com/api/admin/createEmployee", {
        name,
        username,
        password,
        mydepartment,
        userRole,
      })
      .then((res) => {
        setShowAlertCreate(true);
        setData([...data, res.data.result]);
        setSearch([...search, res.data.result]);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const UpdateEmp = (id) => {
    axios
      .get(`https://target-zgr6.onrender.com/api/admin/employee/${id}`)
      .then((res) => {
        setEmp(res.data.result);
      });
  };

  const EditEmployee = (id) => {
    axios
      .patch(
        `https://target-zgr6.onrender.com/api/admin/updateEmployee/${id}`,
        {
          name,
          username,
          mydepartment,
          userRole,
        }
      )
      .then((res) => {
        window.location.reload(false);
        setIsModalChange(false);
      });
  };

  const filterFunc = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(
      data.filter((employee) =>
        employee.name.toLowerCase().includes(searchValue)
      )
    );
  };
  return (
    <Box
      minH="100vh"
      w={"full"}
      mx={"auto"}
      pr={{ base: [6], md: [14], lg: [8, 16] }}>
      <Box
        w={"full"}
        rounded={"md"}
        bg={useColorModeValue("#F5F4F1", "gray.900")}
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
        bg={useColorModeValue("#F5F4F1", "gray.900")}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
          py={2}>
          <Box w={{ base: "full", md: "50%" }} px={6} py={6}>
            <Input
              _focusVisible={{ borderColor: "#0070f3" }}
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
            <Button
              bg={"#7fa084"}
              _hover={{ bg: "#7fa084" }}
              color={"white"}
              onClick={() => setIsModalOpen(true)}>
              اضافة موظف
            </Button>
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
              {search.map((item, index) => (
                <Tr
                  borderBottomWidth="1px"
                  rounded={"md"}
                  key={item._id}
                  _hover={{ bg: "#EFEFEF", _dark: { bg: "gray.800" } }}>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {index + 1}
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {item.name || ""}
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    {item.Department.map((i) => i.name)}
                  </Td>
                  <Td whiteSpace="nowrap" px={4} py={0}>
                    <Button
                      colorScheme="blue"
                      outline={true}
                      onClick={() => {
                        UpdateEmp(item._id);
                        setIsModalChange(true);
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
              isOpen={isModalChange}
              onClose={() => setIsModalChange(false)}>
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
                    {/* g */}
                    <ModalHeader>نافذة تعديل موظف</ModalHeader>
                  </Box>
                </Box>
                {Emp.map((emp) => (
                  <>
                    {emp && (
                      <>
                        <ModalBody>
                          <>
                            <Input
                              name="name"
                              placeholder={emp.name || ""}
                              mb={4}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                              name="username"
                              placeholder={emp.username}
                              mb={4}
                              onChange={(e) => setUsername(e.target.value)}
                            />

                            <Select
                              name="Department"
                              mb={4}
                              icon={<></>}
                              onChange={(e) => setDepartment(e.target.value)}
                              value={emp.mydepartment._id}>
                              <option>اختر القسم</option>
                              {depData.map((item) => (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              ))}
                            </Select>
                            <Select
                              name="userRole"
                              placeholder="الصلاحيات "
                              onChange={(e) => setUserRole(e.target.value)}
                              mb={4}
                              icon={<></>}
                              value={emp.userRole}>
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
                    )}
                  </>
                ))}
              </ModalContent>
            </Modal>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default UsersTable;
