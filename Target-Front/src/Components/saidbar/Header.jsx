import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  CloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiStar } from "react-icons/fi";
import { HiOutlineMail, HiUserGroup } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const LinkItems = [
  { name: "الصفحة الرئيسية", path: "/", icon: FiHome },
  { name: "التحديات", path: "/challenge", icon: FiCompass },
  { name: "الاهداف", path: "/Goals", icon: FiStar },
  { name: "الموظفين", path: "/User", icon: HiUserGroup },
];

const LinkItemsEmployee = [
  { name: "الصفحة الرئيسية", path: "/", icon: FiHome },
  { name: "التحديات", path: "/challenge", icon: FiCompass },
  { name: "الاهداف", path: "/Goals", icon: FiStar },
];

const SidebarLink = ({ icon, children }) => {
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color="inherit"
      rounded={"md"}
      _dark={{ color: "gray.50" }}
      _hover={{
        bg: "#8FAC93",
        _dark: { bg: "#6F9475" },
        color: "gray.50",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease">
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _hover={{
            color: "white",
          }}
          _groupHover={{
            color: "",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const Sidebar = ({ onClose, isAdmin }) => {
  const navigate = useNavigate();

  const LinkItemsToRender = isAdmin ? LinkItems : LinkItemsEmployee;

  const handleLinkClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#F5F4F1", "gray.900")}
      borderLeft="1px"
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.300", "gray.700")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "300px" }}
      pos="fixed"
      zIndex={{ base: 0, md: 2 }}
      h="full">
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        mb={8}
        justifyContent="space-between">
        <Box display={{ base: "none", md: "flex" }}>
          <Image alt="Logo" />
        </Box>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          size="lg"
          color="gray.500"
          _hover={{
            color: "gray.600",
          }}
        />
      </Flex>

      <Box overflowY="auto" pb="10">
        {LinkItemsToRender.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}>
            <SidebarLink icon={link.icon}>{link.name}</SidebarLink>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
