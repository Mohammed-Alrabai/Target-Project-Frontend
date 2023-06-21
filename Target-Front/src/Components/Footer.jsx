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
    <footer class="bg-body dark:bg-gray-900">
      <div class="container px-6 py-5 mx-auto">
        <div class="flex flex-col items-center text-center">
          <a href="#">
            <Image class="w-auto h-24" src={logo} alt="" />
          </a>
        </div>

        <hr class="my-6 border-primary md:my-10 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <div class="flex flex-wrap justify-center mb-6 -mx-4">
            <a
              href="#"
              class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              الصفحة الرئيسية
            </a>

            <a
              href="#"
              class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              من نحن؟
            </a>

            <a
              href="#"
              class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit">
              {" "}
              فريقنا
            </a>
          </div>
          <p class="text-sm mb-6 text-gray-500 dark:text-gray-300">
            @جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
