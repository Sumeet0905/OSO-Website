import React from "react";
import Test from "/src/assetsbooks/lib.png";
import {motion} from "framer-motion";
import { SlideUp } from "../Navbar/Hero/Hero";
const Testimonial = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center ">

            {/* text section*/}
             
                 <div className="space-y-5 lg:max-w-[400px]">
                    <motion.h1
                     variants = {SlideUp(0.2)}
                     initial = "hidden"
                     whileInView="show"
                     className="text-4xl font-league  left-4 relative z-10"
                    > Words of Wisdom </motion.h1>
                      <motion.p
                      variants = {SlideUp(0.4)}
                      initial = "hidden"
                      whileInView="show"
                      className="text-xl font-serif relative z-10">
                      “ Books have always been my best friends. They make me laugh, they make me cry, and they help me find meaning in life. A good book is a friend, a philosopher, and a teacher all rolled into one, providing solace and wisdom whenever we need it .”
                      </motion.p>
                 </div> 
                 
                   {/* Image section*/}
             <div className="realtive h-[400px] w-[400px]">
                <motion.img 
                initial = {{
                    opacity: 0,
                    x: -100,
                    y: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                }}

                whileHover={{
                    scale:1.2,
                    x:0,
                    y:0,
                }}

                transition={{
                    duration:0.5,
                    delay:0.5,
                    scale: {duration: 0.5},
                }}
                src = {Test} alt="" className="relative z-10 w-full lg:max-[350px] img-shadow" />

             </div>
            </div>
            
        </div>
    </section>
  )
}

export default Testimonial
