import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

import { RiArrowDownDoubleFill } from "react-icons/ri";
import { TiArrowUp } from "react-icons/ti";
import { GoPaperAirplane } from "react-icons/go";
import ButtonSend from "./children/ButtonSend";
import moment from "moment";

interface FormProps { }

type Inputs = {
   guest: string;
   attendance: string;
   drink: string;
   date: string;
};
const attendance = [
   {
      id: 0,
      attendance: "Я с удовольствием приду",
   },
   {
      id: 1,
      attendance: "Буду со своей парой",
   },
   {
      id: 2,
      attendance: "К сожалению, не смогу присутствовать",
   },
   {
      id: 3,
      attendance: "Сообщу позже",
   },
];
const drinks = [
   {
      id: 0,
      drink: "Красное вино",
   },
   {
      id: 1,
      drink: "Белое вино",
   },
   {
      id: 2,
      drink: "Шампанское",
   },
   {
      id: 3,
      drink: "Водка",
   },
   {
      id: 4,
      drink: "Виски",
   },
   {
      id: 5,
      drink: "Коньяк",
   },
   {
      id: 6,
      drink: "Не пью алкоголь",
   },
];

const Form: React.FC<FormProps> = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isDirty, isValid },
      reset,
   } = useForm<Inputs>();
   const [active, setActive] = useState<boolean>(false);
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

   const onSubmit: SubmitHandler<Inputs> = (data: any) => {
      setActive(true);
      setIsSubmitSuccessful(!isSubmitSuccessful);

      let OBJ = `Имя: ${data.guest} \n`;
      OBJ += `Посещаемость: ${data.attendance} \n`;
      OBJ += `Напитк: ${data.drink} \n`;

      axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`, {
         chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
         parse_mode: "html",
         text: OBJ,
      }).then((res) => {
         if (res.status === 200 || res.status === 201) {
            console.log(res.data);
         }
      }).catch((err) => {
         console.log(err);
      });
   };

   useEffect(() => {
      reset({
         guest: "",
         drink: "",
         attendance: "",
      });
   }, [isSubmitSuccessful, reset]);

   return (
      <div className="custom-container px-10">
         <div className="flex flex-col justify-center mt-5">
            <motion.h2
               className="mb-10 text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14"
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 1,
               }}
            >
               Анкета
            </motion.h2>
            <div className="w-full mb-14">
               <hr className="w-28 h-[0.5px] bg-gray-400 m-auto border-none" />
               <motion.p
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                     delay: 0,
                     ease: "easeOut",
                     duration: 1,
                  }}
                  className="my-5 leading-6 text-center"
               >
                  Просим вас ниже заполнить анкету,
                  для нас это очень важно! После
                  прохождения не забудьте нажать
                  кнопочку отправить
               </motion.p>
               <hr className="w-28 h-[0.5px] bg-gray-400 m-auto border-none" />
            </div>
         </div>
         {/* <div className="animate-bounce flex justify-center my-10">
            <RiArrowDownDoubleFill />
         </div> */}
         <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
               initial={{ x: -40, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 0.5,
               }}
               className="relative max-w-[290px] w-full"
            >
               <p className="text-[18px] text-start mb-1">Напишите, пожалуйста, Ваши ФИО</p>
               <input
                  disabled={active}
                  type="text"
                  {...register("guest", { required: true })}
                  placeholder="Ваши ФИО"
                  className="w-full px-5 border border-black rounded-full leading-[60px] placeholder:text-gray-500"
               />
               {errors.guest && (
                  <p className="absolute left-0 -bottom-4 flex items-center text-[10px] text-[#ff0000a5]">
                     Ваши ФИО
                     <TiArrowUp />
                  </p>
               )}
            </motion.div>
            <div className="">
               <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                     delay: 0,
                     ease: "easeOut",
                     duration: 0.5,
                  }}
                  className=""
               >
                  <h2 className="text-[18px] mb-2 mt-7">
                     Сможете ли присутствовать на нашем торжестве?
                  </h2>
               </motion.div>
               <div className="relative">
                  <ul className="flex flex-col gap-2">
                     {attendance.map(
                        (item: { id: number; attendance: string }) => {
                           return (
                              <motion.li
                                 key={item.id}
                                 initial={{ x: -40, opacity: 0 }}
                                 whileInView={{ x: 0, opacity: 1 }}
                                 transition={{
                                    delay: +`0.${item.id}`,
                                    ease: "easeOut",
                                    duration: 0.5,
                                 }}
                                 className=""
                              >
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       disabled={active}
                                       {...register("attendance", {
                                          required: true,
                                       })}
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                       value={item.attendance}
                                    />
                                    <span className="text-sm">
                                       {item.attendance}
                                    </span>
                                 </label>
                              </motion.li>
                           );
                        }
                     )}
                  </ul>
                  {errors.attendance && (
                     <p className="absolute -bottom-4 left-0 flex items-center text-[10px] text-[#ff0000a5]">
                        Сможете ли присутствовать <TiArrowUp />
                     </p>
                  )}
               </div>
            </div>
            <div className="">
               <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                     delay: 0,
                     ease: "easeOut",
                     duration: 0.5,
                  }}
                  className=""
               >
                  <h2 className="text-[18px] mb-2 mt-7">
                     Что предпочитаете из напитков?
                  </h2>
               </motion.div>
               <div className="relative">
                  <ul className="flex flex-col gap-2">
                     {drinks.map((item: { id: number; drink: string }) => {
                        return (
                           <motion.li
                              key={item.id}
                              initial={{ x: -40, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{
                                 delay: +`0.${item.id}`,
                                 ease: "easeOut",
                                 duration: 0.5,
                              }}
                           >
                              <label className="flex items-center justify-start gap-4 cursor-pointer">
                                 <input
                                    disabled={active}
                                    {...register("drink", { required: true })}
                                    className="radio cursor-pointer"
                                    name="drink"
                                    type="radio"
                                    value={item.drink}
                                 />
                                 <span className="text-sm">{item.drink}</span>
                              </label>
                           </motion.li>
                        );
                     })}
                  </ul>
                  {errors.drink && (
                     <p className="absolute -bottom-4 left-0 flex items-center text-[10px] text-[#ff0000a5]">
                        Выберите что-нибудь из напитков <TiArrowUp />
                     </p>
                  )}
               </div>
            </div>
            <div className="flex justify-center mt-7">
               <ButtonSend active={active} setActive={setActive} />
            </div>
         </form>
      </div>
   );
};

export default Form;
