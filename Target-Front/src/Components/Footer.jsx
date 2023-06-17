import {
  Box,
  Flex,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const color = useColorModeValue("gray.900", "gray.300");
  return (
    <Box p={4} bg={"white"} _dark={{ bg: "gray.900"}} mt={8} rounded={"md"} overflow="hidden">
      <Flex
        w="full"
        mx="auto"
        maxW="screen-xl"
        p={4}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-between" }}>
        <Text fontSize="sm" color={color} mb={{ base: 3, sm: 0 }}>
          © 2023 Target. جميع الحقوق محفوظة.
        </Text>
        {/* icon github */}
        <Text
          fontSize="sm"
          color="gray.500"
          textAlign={{ base: "right", sm: "left" }}
          mb={{ base: 3, sm: 0 }}
          dark={{ color: "gray.900" }}>
          <Link href="" textDecoration="underline" _hover={{}}>
            <Icon as={FaGithub} w={6} h={6} color={color} _hover={{transform: "scale(1.1)"}} transition={"all 0.2s"} />
          </Link>
        </Text>
        <UnorderedList
          listStyleType="none"
          display={"flex"}
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}>
          <ListItem>
            <Link
              href="#"
              ml={{ base: 2, md: 6 }}
              _hover={{ textDecoration: "underline", color: "blue.400" }}>
              الصفحة الرئيسية
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              ml={{ base: 2, md: 6 }}
              _hover={{ textDecoration: "underline", color: "blue.400" }}>
              لوحة التحكم
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              ml={{ base: 2, md: 6 }}
              _hover={{ textDecoration: "underline", color: "blue.400" }}>
              تواصل معنا
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              _hover={{ textDecoration: "underline", color: "blue.400" }}>
              من نحن
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default Footer;
