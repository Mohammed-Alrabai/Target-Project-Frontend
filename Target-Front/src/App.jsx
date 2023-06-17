import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSearch,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import React from "react";
// import icons
import { HiCode, HiCollection } from "react-icons/hi";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
// import components
import Hero from "./Components/Hero";
import Challenge from "./Components/Challenge";
import DashbordAdmin from "./Components/DashboardAdmin/DashbordAdmin";
import User from "./Components/DashboardAdmin/User";
import Footer from "./Components/Footer";

// sidebar items
const LinkItems = [
  { name: "الصفحة الرئيسية", path: "/", icon: FiHome },
  { name: "التحديات", path: "/challenge", icon: FiCompass },
  { name: "الحلول المقترحة", path: "/Solution", icon: FiTrendingUp },
  { name: "الاهداف", path: "/Goals", icon: FiStar },
  { name: "الاقسام", path: "/Department", icon: HiUserGroup },
  { name: "الموظفين", path: "/User", icon: HiUserGroup },
];

// Start App code
export default function App() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.900", "gray.300");
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        rounded={"md"}
        _dark={{ color: "gray.400" }}
        _hover={{
          bg: "blue.300",
          _dark: { bg: "blue.700" },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}>
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = ({ onClose, ...rest }) => {
    const sidebarVariants = {
      open: {
        x: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
      closed: {
        x: "-100%",
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    };
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        zIndex={{ base: 0, md: 2 }}
        h="full"
        {...rest}>
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          mb={8}
          justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
            px="14"
            py="6"
            key={link.name}
            icon={link.icon}
            onClick={() => navigate(link.path)}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

  return (
    <Box as="section" bg="gray.200" _dark={{ bg: "gray.700" }} dir="rtl">
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        onClose={sidebar.onClose}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w="full"
            borderRight="none"
            onClose={sidebar.onClose}
          />
        </DrawerContent>
      </Drawer>
      <Box mr={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={{ base: "space-between", md: "flex-end" }}
          position={{ base: "sticky" }}
          top="0"
          w="full"
          py={{ base: 2, md: 8, lg: 10 }}
          px={{ base: 4, md: 8, lg: 14 }}
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderBottomWidth="1px"
          color="inherit"
          h="14">
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Flex align="center">
            <IconButton
              aria-label="Toggle color mode"
              ml="4"
              onClick={toggleColorMode}
              icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
              size={{ base: "sm", md: "md" }}
            />
            <Avatar
              ml="4"
              size={{ base: "sm", md: "md" }}
              name="anubra266"
              src="https://picsum.photos/200"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Box as="main" p="4">
          <Box display="flex" w={"full"}  h="96vh">
            <Routes>
            <Route path="/" element={<DashbordAdmin />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/User" element={<User />} />
            <Route path="*" element={<Text>404</Text>} />
          </Routes>
          </Box>
        <Footer />
        </Box>
        </Box>
      </Box>
  );
}
