import React from "react";
import BookOne from "/src/assetsbooks/book 1.png";
import BookSec from "/src/assetsbooks/book 2.png";
import BookThrd from "/src/assetsbooks/book 3.png";
import{ motion } from 'framer-motion';
import{SlideUp} from "../Hero/Hero";

const Displaybooksdata = [{
    
    id:1,
    name: "Give Me",
    img: BookOne,
    price: "₹499",
    delay: 0.4,

},
{
    id:2,
    name: "Loser To Success Story",
    img: BookSec,
    price: "₹399",
    delay: 0.8,
},

{
    id:3,
    name: "Deiteienter",
    img: BookThrd,
    price: "₹499",
    delay: 1.2,
},
];

const disbooks = () => {
  return (
    <section>
        <div className="container py-12">
            {/*Heading Section*/}
            <motion.h3 
             variants={SlideUp(0)}
             initial = "hidden"
             whileInView= "show"
             className="text-4xl text-center font-league font-semibold uppercase py-8">Trending Books</motion.h3>
            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {Displaybooksdata.map((item) =>{
                        return (
                            <motion.div
                            variants={SlideUp(item.delay)}
                            initial = "hidden"
                            whileInView="show"
                             className="group bg-white/50 shadow-md p-3 flex items-center gap-3">
                              <img src={item.img} alt="" 
                              className=" w-[150px] rounded-full image-shadow group-hover:scale-150 transition-all duration-500"/> 
                              <div>
                                <h3 className = "text-xl font-semibold">{item.name}</h3>
                                <p className="text-xl text-red-600">{item.price}</p>
                                </div> 
                            </motion.div>
                        );
                    })}
            </div>
        </div>
    </section>
  );
};

export default disbooks
