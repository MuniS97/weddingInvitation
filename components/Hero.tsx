"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { motion } from "framer-motion";

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container py-12 px-5">
         <div className="">
            <motion.p
               initial={{ y: 20, scale: 0.9, }}
               whileInView={{ y: 0, scale: 1, }}
               transition={{
                  // ease: "easeOut",
                  duration: 1,
               }}
               className="text-lg text-center leading-6 mx-7"
            >
               Судьба нас свела — и с тех пор началась наша история счастья.
            </motion.p>
            <motion.h2
               className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14 mb-9"
               initial={{ scale: 0.9, }}
               whileInView={{ scale: 1, }}
               transition={{
                  // ease: "easeOut",
                  duration: 1,
               }}
            >
               Моё всё
            </motion.h2>
         </div>
         <div className="grid grid-cols-1 gap-3">
            <motion.div
               className="col-span-2 w-full h-80 bg-gray-500"
               initial={{ y: -20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  // ease: "easeOut",
                  duration: 1,
               }}
            >
               <Image
                  width={1000}
                  height={1000}
                  className="img-filter w-full h-full object-cover"
                  src={"/images/image.webp"}
                  alt="img"
               />
            </motion.div>
            {/* <motion.div
               className="col-span-3 h-80 bg-gray-500"
               initial={{ x: 20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{
                  // ease: "easeOut",
                  duration: 1,
               }}
            >
               <Image
                  width={1000}
                  height={1000}
                  className="img-filter  w-full h-full object-cover"
                  src={"/images/image-2.webp"}
                  alt="img"
               />
            </motion.div> */}
         </div>
         <motion.img
            className="img-filter w-40 m-auto"
            src="https://static.tildacdn.com/tild3232-3063-4537-b262-623963666536/photo.png"
            alt="star"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
               // ease: "easeOut",
               duration: 1,
            }}
         />
      </div>
   );
};

export default Hero;
