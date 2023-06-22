import {
  Box,
  Flex,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/img/logo-wh.svg";

const Footer = () => {
    const color = useColorModeValue("gray.900", "gray.300");
  return (
    <footer className="bg-body dark:bg-gray-900">
      <div className="container px-6 py-5 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <Image className="w-auto h-24" src={logo} alt="" />
          </a>
        </div>

        <hr className="my-6 border-primary md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex flex-wrap justify-center mb-6 -mx-4">
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              الصفحة الرئيسية
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              من نحن؟
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              فريقنا
            </a>
          </div>
          <p className="text-sm mb-6 text-gray-500 dark:text-gray-300">
            @جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
