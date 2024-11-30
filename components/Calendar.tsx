/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";

import { GiBigDiamondRing } from "react-icons/gi";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
	const getDuration = (idx: number) => {
		if (idx <= 9) {
			return `0.${idx}`;
		} else if (idx <= 19) {
			return `1.${idx.toString()[1]}`;
		} else if (idx <= 29) {
			return `2.${idx.toString()[1]}`;
		} else if (idx == 30) {
			return `0.${idx.toString()[1]}`;
		} else {
			return 0;
		}
	};

	return (
		<div className="custom-container px-5">
			<div className="mt-2">
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
						Декабрь
					</motion.h2>
				</div>
				<div className="px-10 mt-5">
					<ul className="flex items-center justify-between"></ul>
					<ul className="grid grid-cols-7 gap-2 mt-5">
						<li className="text-xl text-center">ПН</li>
						<li className="text-xl text-center">ВТ</li>
						<li className="text-xl text-center">СР</li>
						<li className="text-xl text-center">ЧТ</li>
						<li className="text-xl text-center">ПТ</li>
						<li className="text-xl text-center">СБ</li>
						<li className="text-xl text-center">ВС</li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						{[
							0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
							15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
							28, 29, 30,
						].map((item: number, idx: number) => {
							return (
								<motion.li
									initial={{ y: 40, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{
										delay: +`${getDuration(idx)}`,
										ease: "easeOut",
										duration: 1,
									}}
									key={item}
									className="text-base text-center relative"
								>
									{idx === 2 ? (
										<motion.div
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											transition={{
												delay: 1.7,
												ease: "easeOut",
												duration: 1,
											}}
											className="animate-ring w-[38px] h-[38px] absolute -top-[10px] -left-[2.6px]"
										>
											<GiBigDiamondRing className="w-full h-full" />
										</motion.div>
									) : null}
									{item + 1}
								</motion.li>
							);
						})}
					</ul>
				</div>
				<img
					className="w-20 m-auto"
					src="https://optim.tildacdn.com/tild6664-3235-4665-b766-323663623865/-/resize/148x/-/format/webp/photo.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Calendar;
