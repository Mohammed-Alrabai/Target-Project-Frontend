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
import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";


const UsersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeData, setEmployeeData] = useState({
      name: "",
      username: "",
      password: "",
      department: "",
    });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
      };

  const color = useColorModeValue("gray.900", "gray.300");

      const handleAddEmployee = () => {
        // قم بتنفيذ الإجراءات المطلوبة عند النقر على زر "اضافة موظف" هنا
        // مثال: افتح النموذج أو قم بإرسال طلب إضافة الموظف إلى الخادم
      };

  const tableData = [
    {
      id: 1,
      name: "محمد",
      department: "المالية",
    },
    {
      id: 2,
      name: "علي",
      department: "ادارة الموظفين",
    },
    {
      id: 3,
      name: "خالد",
      department: "المشتريات",
    },
    {
      id: 4,
      name: "فهد",
      department: "تقنية المعلومات",
    },
  ];
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
                    value={employeeData.name}
                    onChange={handleChange}
                  />
                  <Input
                    name="username"
                    placeholder="اسم المستخدم"
                    mb={4}
                    value={employeeData.username}
                    onChange={handleChange}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="كلمة المرور"
                    mb={4}
                    value={employeeData.password}
                    onChange={handleChange}
                  />
                  <Select
                    name="department"
                    placeholder="اختر القسم"
                    mb={4}
                    icon={<></>}
                    value={employeeData.department}
                    onChange={handleChange}>
                    <option value="قسم 1">قسم 1</option>
                    <option value="قسم 2">قسم 2</option>
                    <option value="قسم 3">قسم 3</option>
                  </Select>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" ml={3} onClick={handleAddEmployee}>
                  حفظ
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>إغلاق</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Table
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
            {tableData.map((user) => (
              <Tr
                borderBottomWidth="1px"
                rounded={"md"}
                key={user.id}
                _hover={{ bg: "gray.100", _dark: { bg: "gray.800" } }}>
                <Td
                  whiteSpace="nowrap"
                  fontSize={"0.95rem"}
                  fontWeight={"medium"}
                  px={6}
                  py={6}>
                  {user.id}
                </Td>
                <Td
                  whiteSpace="nowrap"
                  fontSize={"0.95rem"}
                  fontWeight={"medium"}
                  px={6}
                  py={6}>
                  {user.name}
                </Td>
                <Td
                  whiteSpace="nowrap"
                  fontSize={"0.95rem"}
                  fontWeight={"medium"}
                  px={6}
                  py={6}>
                  {user.department}
                </Td>
                <Td whiteSpace="nowrap" px={4} py={0}>
                  <Button colorScheme="blue" outline={true}>
                    تعديل
                  </Button>
                </Td>
                <Td
                  whiteSpace="nowrap"
                  fontSize={"0.95rem"}
                  fontWeight={"medium"}
                  px={6}
                  py={6}>
                  <Button colorScheme="red" outline={true}>
                    حذف
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default UsersTable;
