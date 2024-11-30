import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
	const [stop, setStop] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// Total time values for percentage calculations
	const totalSeconds = 60;
	const totalMinutes = 60;
	const totalHours = 24;
	const totalDays = 365; // Adjust according to your use case

	useEffect(() => {
		const date = new Date("12/03/2024 13:30:00");

		const interval = setInterval(() => {
			const now = new Date();
			const difference = date.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d === 0 && h === 0 && m === 0 && s === 0) {
				setStop(true);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	// Calculate progress percentages
	const getProgressPercentage = (current: number, total: number) => {
		return (current / total) * 100;
	};

	const blocks = [
		{ value: days, label: "Дней", total: totalDays },
		{ value: hours, label: "Часов", total: totalHours },
		{ value: minutes, label: "Минут", total: totalMinutes },
		{ value: seconds, label: "Секунд", total: totalSeconds },
	];

	return (
		<div className="custom-container">
			<div className="relative mb-10 px-5">
				<motion.h2
					className="text-6xl font-[champignon] font-normal leading-8 text-center mt-20"
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0,
						ease: "easeOut",
						duration: 1,
					}}
				>
					Разделите с нами <span>любовь</span> через
					<span className="font-sans font-light">...</span>
				</motion.h2>
			</div>
			<div className="flex justify-center gap-4 px-5 py-10">
				{blocks.map(({ value, label, total }, index) => {
					const percentage = getProgressPercentage(value, total);
					const strokeDashoffset = 440 - (440 * percentage) / 100; // Circle circumference = 440

					return (
						<motion.div
							key={index}
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								ease: "easeOut",
								duration: 1,
							}}
							className="relative flex flex-col items-center justify-center w-20 h-20"
						>
							<svg
								className="absolute -z-10 w-full h-full transform rotate-90"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								viewBox="0 0 160 160"
							>
								<circle
									cx="80"
									cy="80"
									r="70"
									stroke="#ffffff00"
									strokeWidth="5"
									fill="none"
								/>
								<circle
									cx="80"
									cy="80"
									r="70"
									stroke={!stop ? "#6b7280" : "#ffffff00"}
									strokeWidth="5"
									fill="none"
									strokeDasharray="440"
									strokeDashoffset={strokeDashoffset}
									strokeLinecap="round"
								/>
							</svg>
							<p className="text-xl leading-6">
								{!stop ? value : "0"}
							</p>
							<p className="text-xs text-gray-500">{label}</p>
						</motion.div>
					);
				})}
			</div>
			<div className="">
				{stop && (
					<div className="w-full flex items-center justify-center mb-10">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}
							className="text-center"
						>
							<h1 className="text-3xl font-bold mb-4">
								Ожидание окончено!
							</h1>
							<p className="">
								Спасибо, что разделили этот момент с нами.
								Давайте сделаем этот день незабываемым!
							</p>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Counter;
