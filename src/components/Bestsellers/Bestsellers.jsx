import React from "react";
import Bestb1 from "/src/assetsbooks/best1.png";
import Bestb2 from "/src/assetsbooks/best2.png";
import Bestb3 from "/src/assetsbooks/best3.png";
import{ motion } from 'framer-motion';
import { SlideUp } from "../Navbar/Hero/Hero";

const BestSellerdata = [{
    
    id:1,
    name: "Celebrate the day of Forest",
    img: Bestb1,
    price: "₹449",
    delay: 0.4,

},
{
    id:2,
    name: "The Sun Also Rises",
    img: Bestb2,
    price: "₹469",
    delay: 0.8,
},

{
    id:3,
    name: "The Black Cat",
    img: Bestb3,
    price: "₹499",
    delay: 1.2,
},
];
const Bestsellers = () => {
  return (
    <section>
      <div className="container py-24">
          <motion.h3 
          variants={SlideUp(0.5)}
          initial = "hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8">Our Bestsellers</motion.h3>

          {/* card section */}

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">

           {
            BestSellerdata.map((item) => {
                return (
                    <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                         <img src= {item.img} alt="" className="w-60 mx-auto img-shadow group-hover:scale-110 transition-all duration-800" />
                         
                        <button className="btn-primary opacity-0 group-hover:opacity-100">
                           Buy Now 
                        </button>

                        <p className="text-xl font-semibold">{item.name}</p>
                        <p className="text-xl font-bold text-red-600">{item.price}</p>
                        </div>
                )
            }
        )
           }

          </div>

      </div>
    </section>
  )
};

export default Bestsellers
