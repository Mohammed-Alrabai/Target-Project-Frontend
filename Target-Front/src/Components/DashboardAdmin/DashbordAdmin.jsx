import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  SimpleGrid,
  Container,
  Stack,
  color,
  Grid,
  GridItem,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
// Here we have used framer-motion package for animations
import { motion, useMotionValueEvent } from "framer-motion";
// Here we have used react-icons package for the icons
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import {FiTrendingUp} from "react-icons/fi";

const statData = [
  {
    id: 2,
    label: "Total post",
    score: 3245,
    icon: AiOutlineEye,
    percentage: "30%",
  },
  {
    id: 1,
    label: "Total post reactions",
    score: 1730,
    icon: AiOutlineLike,
  },
  {
    id: 3,
    label: "عدد الموظفين",
    score: 34,
    icon: HiOutlineMail,
  },
];
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StatsWithIcons = (props) => {
  const stat = props.statData;
  const color = useColorModeValue("gray.50", " gray.900");
  const textColor = useColorModeValue("gray.900", "gray.50");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {stat.map((data, index) => (
          <motion.div
            animate={{
              x: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            initial={{
              x: 500,
              y: 0,
              scale: 1,
            }}>
            <Card key={index} data={data} />
          </motion.div>
        ))}
      </SimpleGrid>
      <motion.div
        animate={{
          x: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        initial={{
          x: 500,
          y: 0,
          scale: 1,
        }}>
        <Box
          bg={"color"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 5, md: 16 }}
          w={"full"}
          flex={1}>
          <Box bg={color} mb={{ base: 5, md: 2 }} w={"full"} rounded={"md"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}>
              <Text
                fontSize={{ base: "0.75rem", md: "1.2rem" }}
                fontWeight={"extrabold"}
                color={textColor}
                py={5}
                mx={3}>
                التحديات الاكثر تفاعلا
              </Text>
              <Icon as={FiTrendingUp} />
            </Box>
            <hr></hr>
            <Box overflowX="auto">
              <Table
                minW={{ base: "auto", md: "full" }}
                textAlign="left"
                fontSize="sm"
                fontWeight="light"
                color={textColor}
                rounded={"md"}>
                <Thead borderBottomWidth="1px" fontWeight="extrabold">
                  <Tr>
                    <Th fontSize={"0.95rem"} px={6} py={6}>
                      #
                    </Th>
                    <Th
                      fontSize={{ base: "0.75rem", md: "1.2rem" }}
                      fontWeight={"extrabold"}
                      px={6}
                      py={6}>
                      العنوان
                    </Th>
                    <Th
                      fontSize={{ base: "0.75rem", md: "1.2rem" }}
                      fontWeight={"extrabold"}
                      px={6}
                      py={6}>
                      الموظف
                    </Th>
                    <Th
                      fontSize={{ base: "0.75rem", md: "1.2rem" }}
                      fontWeight={"extrabold"}
                      px={6}
                      py={6}>
                      عدد الردود
                    </Th>
                    <Th
                      fontSize={{ base: "0.75rem", md: "1.2rem" }}
                      fontWeight={"extrabold"}
                      px={6}
                      py={6}>
                      مشاهدة
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr
                    borderBottomWidth="1px"
                    rounded={"md"}
                    _hover={{ bg: "gray.100", _dark: { bg: "gray.800" } }}>
                    <Td
                      whiteSpace="nowrap"
                      fontSize={"0.95rem"}
                      fontWeight={"medium"}
                      px={6}
                      py={6}>
                      1
                    </Td>
                    <Td
                      whiteSpace="nowrap"
                      fontSize={"0.95rem"}
                      fontWeight={"medium"}
                      px={6}
                      py={6}>
                      name
                    </Td>
                    <Td
                      whiteSpace="nowrap"
                      fontSize={"0.95rem"}
                      fontWeight={"medium"}
                      px={6}
                      py={6}>
                      desc
                    </Td>
                    <Td
                      whiteSpace="nowrap"
                      fontSize={"0.95rem"}
                      fontWeight={"medium"}
                      px={6}
                      py={6}>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Text textAlign={"center"} size={"2xl"}></Text>
                        33 <Icon as={HiOutlineMail} />
                      </Box>
                    </Td>
                    <Td whiteSpace="nowrap" px={2} py={0}>
                      <Button colorScheme="blue" px={6} outline={true}>
                        <Icon as={AiOutlineEye} />
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
          <Box bg={color} mb={{ base: 5, md: 2 }} w={"full"} rounded={"md"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}>
              <Text
                fontSize={{ base: "0.75rem", md: "1.2rem" }}
                fontWeight={"extrabold"}
                color={textColor}
                py={5}
                mx={3}>
                الموظفين الاكثر تفاعلا
              </Text>
              <Icon as={FiTrendingUp} />
            </Box>
            <hr></hr>
            <Table
              minW="auto"
              overflowX="auto"
              textAlign="left"
              fontSize="sm"
              fontWeight="light"
              color={textColor}
              rounded={"md"}>
              <Thead borderBottomWidth="1px" fontWeight="extrabold">
                <Tr>
                  <Th fontSize={{ base: "0.75rem", md: "1.2rem" }}>#</Th>
                  <Th
                    fontSize={{ base: "0.75rem", md: "1.2rem" }}
                    fontWeight={"extrabold"}
                    px={6}
                    py={6}>
                    الاسم
                  </Th>
                  <Th
                    fontSize={{ base: "0.75rem", md: "1.2rem" }}
                    fontWeight={"extrabold"}
                    px={6}
                    py={6}>
                    القسم
                  </Th>
                  <Th
                    fontSize={{ base: "0.75rem", md: "1.2rem" }}
                    fontWeight={"extrabold"}
                    px={6}
                    py={6}>
                    عدد الردود
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  borderBottomWidth="1px"
                  rounded={"md"}
                  _hover={{ bg: "gray.100", _dark: { bg: "gray.800" } }}>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    1
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    name
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    px={6}
                    py={6}>
                    desc
                  </Td>
                  <Td
                    whiteSpace="nowrap"
                    fontSize={"0.95rem"}
                    fontWeight={"medium"}
                    py={6}>
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Text textAlign={"center"} size={"2xl"}></Text>
                      33 <Icon as={HiOutlineMail} />
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

const Card = ({ data }) => {
    const color = useColorModeValue("gray.900", "gray.100");
  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Stack
        direction="column"
        rounded="md"
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "2px 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        w="100%"
        textAlign="left"
        align="start"
        spacing={0}
        role="group"
        overflow="hidden">
        <HStack
          py={6}
          px={5}
          spacing={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          w="100%">
          <Flex
            justify="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="blue.400"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)">
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="md" noOfLines={2} color={color}>
              {data.label}
            </Text>
            <HStack spacing={2}>
              <Text as="h2" fontSize="lg" fontWeight="extrabold">
                {data.score}
              </Text>
              <Flex>
                {Number(data.score) > 100 ? (
                  <Icon as={BsArrowUpShort} w={6} h={6} color="green.400" />
                ) : (
                  <Icon as={BsArrowDownShort} w={6} h={6} color="red.400" />
                )}
                <Text as="h2" fontSize="md">
                  {data.percentage}
                </Text>
              </Flex>
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default StatsWithIcons;
