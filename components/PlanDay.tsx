import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface PlanDayProps {}

const arr = [
	// {
	// 	id: 0,
	// 	date: "11:00",
	// 	title: "Загс",
	// 	subTitle: "Сладкая традиция, которую мы не можем пропустить.",
	// },
	{
		id: 1,
		date: "18:30",
		title: "Вечер",
		subTitle: "К сожалению, даже такой волшебный вечер может закончиться.",
	},
];

const PlanDay: React.FC<PlanDayProps> = () => {
	return (
		<div className="custom-container px-5">
			<div className="">
				<motion.h2
					className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14"
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0,
						ease: "easeOut",
						duration: 1,
					}}
				>
					{/* Программа дня */}
					Время проведение
				</motion.h2>
			</div>
			<div className="flex flex-col gap-10 mt-5 relative">
				{arr.map((item: any) => {
					return (
						<div
							key={item.id}
							className="flex items-center justify-around relative last"
						>
							<motion.div
								initial={{
									y: 5,
									x: -50,
									scale: 0.9,
									opacity: 0,
								}}
								whileInView={{
									y: 0,
									x: 0,
									scale: 1,
									opacity: 1,
								}}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="w-fit"
							>
								<p className="text-[20px]">{item.date}</p>
							</motion.div>
							<motion.img
								initial={{
									scale: 1,
									opacity: 1,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
								}}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="w-20"
								src="https://optim.tildacdn.com/tild6166-3236-4238-a435-343036623838/-/resize/126x/-/format/webp/_.png"
								alt="stars"
							/>
							<motion.div
								initial={{
									y: 5,
									x: 50,
									scale: 1,
									opacity: 1,
								}}
								whileInView={{
									y: 0,
									x: 0,
									scale: 1,
									opacity: 1,
								}}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="w-32"
							>
								<p className="text-lg leading-5">
									{item.title}
								</p>
								<p className="text-[11px] leading-3 mt-2 text-gray-500">
									{item.subTitle}
								</p>
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlanDay;
