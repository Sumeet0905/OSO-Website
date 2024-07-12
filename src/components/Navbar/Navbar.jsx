import React from "react"
import Logo from "/src/assetsbooks/bookstore.png";
import { FaUserLarge } from "react-icons/fa6";
import { animate, delay, motion } from 'framer-motion';

const NavMenu = [
    {
        id:1,
        title: "Home",
        path:"/",
        delay:0.2,
    },
    {
        id:2,
        title: "About",
        path:"/about",
        delay:0.2,
    },{
        id:3,
        title: "Store",
        path:"/store",
        delay:0.3,
    },{
        id:1,
        title: "Delivery",
        path:"/delivery",
        delay:0.4,
    },{
        id:5,
        title: "Contact Us",
        path:"/contact",
        delay:0.2,
    },
]

const Slidedown = (delay) => {
    return{
        initial:{
            y:"-100%",
            opacity: 0,
        },
        animate :{
            y:0,
            opacity: 1,
            transition:{
                duration: 0.6,
                delay: delay,
            },
        },
    };
};

const Navbar = () => {
  return <nav>
    <div className="z-[100] absolute container flex justify-between items-center font-league">
        {/* logo section */}
        <motion.img
        initial = {{opacity : 0}}
        animate = {{opacity : 1}}
        transition={{duration : 0.8,delay : 0.5}}
        src={Logo}
        alt=""
        className="w-24"
        />
        {/* menu section */}
         <div className= "hidden md:block">
           <ul className= "flex gap-12">
            {
              NavMenu.map((menu) => {
                return(
                    <motion.li
                       variants={Slidedown(menu.delay)}
                       initial = "initial"
                       animate = "animate"
                       
                       key={menu.id}
                       className="nav-menu"
                       date-delay = {menu.delay}
                       >
                        <a href={menu.path} className="inline-block px-2 py-2 text-2xl"
                        >
                            {menu.title}
                            </a>
                       </motion.li>
                );
              }
            )
            }
            </ul> 
         </div>
        {/* button section */}
        <motion.div variants={Slidedown(1)}
        initial = "initial" animate = "animate">
            <button className= "h-[30px] w-[30px] grid place-items-center rounded-full text-white bg-black">
                <FaUserLarge className="h-[18px] w-[18px]" /></button>
        </motion.div>
    </div>
  </nav>;
};

export default Navbar
