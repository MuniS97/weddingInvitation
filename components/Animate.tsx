/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AnimateProps {
   setHide: Function;
}

const Animate: React.FC<AnimateProps> = ({ setHide }) => {
   const [startAnimation, setStartAnimation] = useState(false);

   const { push } = useRouter()

   return (
      <motion.div
         initial={{ opacity: 1 }}
         whileInView={{ opacity: startAnimation ? 0 : 1 }}
         transition={{
            ease: "easeOut",
            duration: 0.5,
         }}
         className={`fixed top-0 left-0 z-[99] w-full h-full`}
      >
         <img className="w-20 absolute top-[10%] left-[20%] z-20 invert pointer-events-none select-none" src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/210x/-/format/webp/photo.png" alt="" />
         <img className="w-32 absolute top-[20%] left-[40%] z-20 invert pointer-events-none select-none" src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/210x/-/format/webp/photo.png" alt="" />
         <img className="w-10 absolute top-[18%] left-[80%] z-20 invert pointer-events-none select-none" src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/210x/-/format/webp/photo.png" alt="" />
         <img className="w-16 absolute top-[66%] left-[28%] z-20 invert pointer-events-none select-none" src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/210x/-/format/webp/photo.png" alt="" />
         <img className="w-16 absolute top-[75%] left-[65%] z-20 invert pointer-events-none select-none" src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/210x/-/format/webp/photo.png" alt="" />
         <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-black/50"></div>
         <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-[3s] ease-out">
            <img className="w-full h-full object-cover" src="https://kluch.media/upload/iblock/830/768x500mobil.jpg" alt="img" /> {/* https://kluch.media/upload/iblock/830/768x500mobil.jpg */}
         </div>
         <div className="h-full relative z-20 flex flex-col items-center justify-center text-white">
            <motion.p
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="text-2xl mb-5"
            >
               Чтобы открыть приглашение,
            </motion.p>
            <motion.p
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.2,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="mb-20 text-7xl font-[champignon] font-normal leading-[0.8] text-center"
            >
               Нажмите ниже
            </motion.p>
            <motion.button
               onClick={() => { setTimeout(() => { push("/welcome") }, 600), setStartAnimation(true) }}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.4,
                  ease: "easeOut",
                  duration: 1,
               }}
               className="px-10 py-4 text-xl border border-white rounded-3xl"
            >
               Открыть
            </motion.button>
         </div>
      </motion.div>
   );
};

export default Animate;
