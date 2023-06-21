import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import bgHero from "../../assets/img/hero.svg";
import { Button, Icon, Image } from "@chakra-ui/react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import {BsLinkedin} from "react-icons/bs";
import meeting from '../../assets/img/meeting.jpg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="overflow-hidden">
        <header className="bg-body mx-auto px-6 py-4 dark:bg-gray-900 h-screen">
          {/* Navbar Start */}
          <nav className="relative bg-body dark:bg-gray-900 mb-6">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
              <div className="flex items-center justify-between">
                <a href="#">
                  <img className="w-auto h-6 mx-auto" src={logo} alt="" />
                </a>
                <div className="flex md:hidden">
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu">
                    {!isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-body dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "opacity-0 -translate-x-full"
                }`}>
                <div className="flex flex-col md:flex-row md:mx-6 items-center">
                  <a
                    className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-primary dark:hover:text-primary md:mx-4 md:my-0"
                    href="#">
                    الصفحة الرئيسية
                  </a>
                  <a
                    className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-primary dark:hover:text-primary md:mx-4 md:my-0"
                    href="#">
                    من نحن؟
                  </a>
                  <a
                    className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-primary dark:hover:text-primary md:mx-4 md:my-0"
                    href="#">
                    فريقنا
                  </a>
                  <Button
                    bg={"#7fa084"}
                    color={"#f5f4f1"}
                    _hover={{ bg: "#6F9475" }}
                    className="my-2 text-body transition-colors duration-300 transform dark:text-gray-200 md:mx-4 md:my-0"
                    onClick={() => navigate("/login")}>
                    سجيل دخول
                  </Button>
                </div>
              </div>
            </div>
          </nav>
          {/* gggggg */}
          {/* Hero Start */}
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex my-16">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                    عدة عقول تفكر
                    <span className="text-primary "> لهدف واحد</span>
                  </h1>
                  <p className="mt-3 text-gray-600 text-lg dark:text-gray-400">
                    الهدف الرئيسي لنظامنا هو تحسين التواصل وتعزيز تبادل الأفكار
                    والحلول بين الموظفين والمدراء. يسعى النظام أيضًا إلى تمكين
                    المستخدمين من مشاركة اقتراحاتهم وحلولهم للمسؤولين والإدارة،
                    وذلك بهدف تطوير وتحسين العمليات وتحقيق الأهداف المؤسسية.
                  </p>
                  <button className="w-full px-16 py-3 mt-6 text-md tracking-wider text-body uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-hover focus:outline-none">
                    ابدا الان
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full h-full lg:max-w-3xl"
                  src={bgHero}
                  alt="Catalogue-pana.svg"
                />
              </div>
            </div>
          </div>
        </header>
        {/* Features Start */}
        <section className="bg-body dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              <span className="text-primary text-3xl"> من نحن ؟</span>
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 shadow-md rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-body bg-primary rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  رؤيتنا
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  تمكين الموظفين والمدراء للتواصل والتعاون المثمر، وتعزيز
                  الإبداع والابتكار في المؤسسة، من أجل تحقيق التطور المستمر
                  والنجاح المستدام.{" "}
                </p>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 shadow-md rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-body bg-primary rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  رسالتنا
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  نحن نسعى لتعزيز التواصل البناء وتبادل الأفكار والحلول بين
                  الموظفين والمدراء، وتمكينهم من المشاركة الفاعلة في تحقيق أهداف
                  المؤسسة وتطوير حلول مبتكرة وملائمة للتحديات التي تواجهها.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 shadow-md rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-body bg-primary rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  أهدافنا
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  تعزيز التفاعل الإيجابي والتعاون بين الموظفين والمدراء. تشجيع
                  الابتكار والإبداع في العمل والخدمات. تحقيق التطوير المستمر
                  للعمليات والخدمات. توضيح أهداف المؤسسة وتركيز الجميع عليها.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <div className="px-4 bg-body py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-36 lg:py-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  The quick, brown fox
                  <br className="hidden md:block" />
                  jumps over
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                    <span className="relative inline-block text-deep-purple-accent-400">
                      a lazy dog
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                Features
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    A slice of heaven
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    Disrupt inspire
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    Preliminary thinking
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    Flipboard curmudgeon
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    Storage shed
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52">
                        <polygon
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </span>
                    Satoshi Nakamoto
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>


        {/* Our Team */}
        <section className="bg-body dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-primary capitalize lg:text-3xl dark:text-white">
              فريقنا
            </h1>
            {/*  */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
              <div className="flex bg-gray-50 flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-primary shadow-lg rounded-xl">
                <span className="inline-flex items-center justify-center h-[8.875rem] w-[8.875rem] rounded-full bg-gray-800">
                  <span className="text-5xl font-medium text-white leading-none">
                    م
                  </span>
                </span>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  محمد الربعي
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Full Stack Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://www.linkedin.com/in/mohammed-alrabai-987a82246/"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Linkedin">
                    <Icon h={5} w={5} as={BsLinkedin} />
                  </a>

                  <a
                    _target="_blank"
                    href="https://github.com/Mohammed-Alrabai"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github">
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex bg-gray-50 flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-primary shadow-lg rounded-xl">
                <span className="inline-flex items-center justify-center h-[8.875rem] w-[8.875rem] rounded-full bg-gray-800">
                  <span className="text-5xl font-medium text-white leading-none">
                    ن
                  </span>
                </span>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  نجلاء الدوسري
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Full Stack Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://www.linkedin.com/in/najla-aldossari-26065a27a/"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Linkedin">
                    <Icon h={5} w={5} as={BsLinkedin} />
                  </a>

                  <a
                    href="https://github.com/naj55"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github">
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Header;
