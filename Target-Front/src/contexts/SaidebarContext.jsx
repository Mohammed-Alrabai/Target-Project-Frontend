import { createContext, useContext, useState } from "react";

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
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  Button,
} from "@chakra-ui/react";

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

import logo from "../assets/img/logo-wh.svg";
import logoBlack from "../assets/img/logo-b.svg";
import Footer from "../Components/Footer";
import { HiUserGroup } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const sidebar = useDisclosure();
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();
  const isUser = localStorage.getItem("username");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  const logout = () => {
    localStorage.clear();
    // cookies.remove("token");
    // cookies.remove("username");
    navigate("/login");
  };

  const [state, setState] = useState(false);
  return (
    <SidebarContext.Provider value={{ state, setState }}>
      <Box as="section" bg="#E5E5E5" _dark={{ bg: "gray.700" }} dir="rtl">
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
        <Box mr={{ base: 0, md: "300px" }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify={{ base: "space-between", md: "flex-end" }}
            position={"sticky"}
            top={0}
            zIndex={100}
            w="full"
            py={{ base: 2, md: 8, lg: 10 }}
            px={{ base: 4, md: 8, lg: 24 }}
            bg="#F5F4F1"
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
                bg={"#7FA084"}
                ml="4"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
                size={{ base: "sm", md: "md" }}
              />
              {/* <Button onClick={() => navigate("/login")}>Login</Button> */}
              <Menu>
                <MenuButton
                  ml="4"
                  size={{ base: "sm", md: "md" }}
                  name="anubra266"
                  src="https://picsum.photos/200"
                  cursor="pointer"
                  onClick={handleDropdownOpen}>
                  {" "}
                  <Avatar bg="#7FA084" />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={logout}>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <Box as="main" p="">
            <Box display="flex" w={"full"} h="100%" minH={"100vh"}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
const LinkItems = [
  { name: "الصفحة الرئيسية", path: "/", icon: FiHome },
  { name: "التحديات", path: "/challenge", icon: FiCompass },
  // { name: "الحلول المقترحة", path: "/Solution", icon: FiTrendingUp },
  { name: "الاهداف", path: "/Goals", icon: FiStar },
  // { name: "الاقسام", path: "/Department", icon: HiUserGroup },
  { name: "الموظفين", path: "/User", icon: HiUserGroup },
];

const LinkItemsEmployee = [
  { name: "التحديات", path: "/", icon: FiCompass },
  // { name: "الحلول المقترحة", path: "/Solution", icon: FiTrendingUp },
  { name: "الاهداف", path: "/Goals", icon: FiStar },
  // { name: "الاقسام", path: "/Department", icon: HiUserGroup },
];
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
      _dark={{ color: "gray.50" }}
      _hover={{
        bg: "#8FAC93",
        _dark: { bg: "#6F9475" },
        color: "gray.50",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}>
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
const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("username");

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
      bg={useColorModeValue("#F5F4F1", "gray.900")}
      borderLeft="1px"
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.300", "gray.700")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "300px" }}
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
        <Box display={{ base: "block", md: "flex" }} mr={-6}>
          {localStorage.getItem("chakra-ui-color-mode") === "dark" ? (
            <>
              <Image
                src={logoBlack}
                objectFit="contain"
                alt="logo"
                height={"90px"}
                mr={20}
                mt={10}
                w={"full"}
              />
            </>
          ) : (
            <Image
              src={logo}
              objectFit="contain"
              alt="logo"
              height={"90px"}
              mr={20}
              mt={10}
              w={"full"}
            />
          )}
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {isUser ? (
        <>
          {LinkItemsEmployee.map((link) => (
            <NavItem
              px="14"
              py="6"
              key={link.name}
              icon={link.icon}
              onClick={() => navigate(link.path)}>
              {link.name}
            </NavItem>
          ))}
        </>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};
