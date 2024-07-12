import React from "react";
import Logo from "/src/assetsbooks/bookstore.png";
import Mail from "/src/assetsbooks/mail.png";
import House from "/src/assetsbooks/house.png";
import Care from "/src/assetsbooks/care.png";
import { FaUserLarge } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.2,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Store",
    path: "/store",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    delay: 0.2,
  },
];

const Slidedown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Navbar = () => {
  return (
    <nav>
      <div className="z-[100] absolute container flex justify-between items-center font-league">
        {/* Logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="Bookstore Logo"
          className="w-24"
        />
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex gap-12">
            {NavMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={Slidedown(menu.delay)}
                initial="initial"
                animate="animate"
                className="nav-menu"
                data-delay={menu.delay}
              >
                <a href={menu.path} className="inline-block px-2 py-2 text-2xl">
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Button section */}
        <motion.div variants={Slidedown(1)} initial="initial" animate="animate">
          <button className="h-[30px] w-[30px] grid place-items-center rounded-full text-white bg-black">
            <FaUserLarge className="h-[18px] w-[18px]" />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

const SlideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const displayBooksData = [
  {
    id: 1,
    name: "Address",
    img: House,
    price: "Jaypee University Of Information Technology, Solan",
    delay: 0.5,
  },
  {
    id: 2,
    name: "E-Mail",
    img: Mail,
    price: "contact@bookstore.com",
    delay: 0.7,
  },
  {
    id: 3,
    name: "Toll-Free Number",
    img: Care,
    price: "1800-654321 ",
    delay: 0.9,
  },
];

const DisplayBooks = () => {
  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="container py-12 grid grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          {/* Heading Section */}
          <motion.h3
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-5xl text-right font-league py-10"
          >
            Contact Us
          </motion.h3>
          {/* Grid Section */}
          <div className="space-y-10 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5">
            {displayBooksData.map((item) => (
              <motion.div
                key={item.id}
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="p-3 flex items-center gap-5"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[40px] image-shadow hover:scale-150 transition-all duration-500"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-red-600">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className=" relative flex flex-col justify-center">
          <motion.form
            className="bg-gray-400 p-6 rounded-lg absolute right-20 top-20 bottom-0"
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="show"
          >
            <h3 className="text-2xl font-bold uppercase mb-4">Get in Touch</h3>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-lg font-medium text-dark">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-1 bg-black text-white rounded-md hover:bg-red-500 transition-colors duration-300"
            >
              Get in Touch
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <DisplayBooks />
    </>
  );
};

export default App;
