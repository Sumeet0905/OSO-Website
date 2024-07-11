import React from "react";
import BannerPng from "/src/assetsbooks/bookpng.png";
import {motion} from "framer-motion";
import { SlideUp } from "../Hero/Hero";
const Banner = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center ">

            {/* Image section*/}
             <div className="realtive h-[450px] w-[450px]">
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
                src = {BannerPng} alt="" className="relative z-10 w-full lg:max-[350px] img-shadow" />

             </div>

            {/* text section*/}
             
             <div className="space-y-5 lg:max-w-[400px]">
                <motion.h1 
                 variants={SlideUp(1)}
                 initial = "hidden"
                 whileInView="show"
                className="text-6xl uppercase font-semibold font-league">Your Next Great Read Awaits!</motion.h1>
                <motion.p variants={SlideUp(1.2)}
                 initial = "hidden"
                 whileInView="show">Explore our diverse collection of books and find your next favorite read. Your literary adventure starts here!</motion.p>
                <motion.button
                  variants={SlideUp(1.4)}
                  initial = "hidden"
                  whileInView="show"
                className="btn-primary">
                    Explore
                </motion.button>
             </div>

            </div>
        </div>
    </section>
  )
}

export default Banner
