"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { motion } from "framer-motion";

import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calendar from "@/components/Calendar";
import Counter from "@/components/Counter";
import Animate from "@/components/Animate";
import PlanDay from "@/components/PlanDay";
import Form from "@/components/Form";

const Welcome = () => {
	const [active, setActive] = useState(true);

	useEffect(() => {
		const audio = document.querySelector("audio");
		if (active) {
			audio?.play();
		} else {
			audio?.pause();
		}
	}, [active]);

	return (
		<div>
			<Head>
				<title>Firdavs & Marjona</title>
				<link
					rel="icon"
					type="image/x-icon"
					href="/images/rings.png"
				></link>
			</Head>

			<Header />
			<main className="overflow-hidden">
				<section>
					<Hero />
				</section>

				<section>
					<div className="custom-container px-5 overflow-hidden">
						<div className="mt-5">
							<motion.h2
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="text-7xl font-[champignon] font-normal leading-[0.8] text-center"
							>
								Дорогие и<br /> любимые!
							</motion.h2>
						</div>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								delay: 0,
								ease: "easeOut",
								duration: 1,
							}}
							className="w-40 mx-auto my-10 flex flex-col items-center py-4 border-y-2 border-gray-400"
						>
							<button
								className="mb-2"
								onClick={() => {
									setActive(!active);
								}}
							>
								{active ? (
									<IoVolumeHigh
										size={35}
										color={"#00000030"}
									/>
								) : (
									<IoVolumeMute
										size={35}
										color={"#00000030"}
									/>
								)}
							</button>
							<audio
								loop
								autoPlay={true}
								src="/music/music.mp3"
							></audio>
							<p className="text-xs text-center text-gray-500">
								Если Вас отвлекает музыка, ее можно выключить
							</p>
						</motion.div>
						<div className="w-full">
							<motion.p
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0.3,
									ease: "easeOut",
									duration: 1,
								}}
								className=" text-center mt-5"
							>
								Один день в этом году будет для нас особенным и
								мы хотим провести его в кругу близких и друзей.
								С большим удовольствием приглашаем вас на
								знаменательный праздник - нашу свадьбу!
							</motion.p>
						</div>
						<div className="mt-20">
							<motion.h2
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="text-7xl font-[champignon] font-normal leading-[0.8] text-center"
							>
								Ждем вас
							</motion.h2>
						</div>
						<div className="mb-5">
							<motion.p
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeIn",
									duration: 1,
								}}
								className="text-xl text-center mt-5"
							>
								<span className="font-[champignon] text-5xl leading-3 font-medium mr-3">
									10 05 2025
								</span>{" "}
								года
							</motion.p>
						</div>
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0,
								ease: "easeOut",
								duration: 1.5,
							}}
							className="relative flex justify-center"
						>
							<Image
								className="max-w-[247px] min-h-[300px] w-full object-cover img-filter"
								src={"/images/image-5.webp"}
								width={1000}
								height={1000}
								alt="photo"
							/>
						</motion.div>
					</div>
				</section>

				<section>
					<Calendar />
				</section>

				<section>
					<div className="custom-container px-5">
						<div className="flex justify-center">
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
								Место проведение
							</motion.h2>
						</div>
						<div className="mt-5">
							<motion.p
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="text-[18px] text-center"
							>
								Ресторан Vatan
							</motion.p>
							<motion.p
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="block mt-5 text-center"
							>
								Ориентир: кинотеатр "ВАТАН"
							</motion.p>
						</div>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								delay: 0,
								ease: "easeOut",
								duration: 1,
							}}
							className="flex justify-center mt-8"
						>
							<Link
								href={
									"https://yandex.uz/maps/-/CHbbQQ3b"
								}
								className="relative max-w-[260px] w-full h-10 px-5 flex items-center gap-2 border border-black rounded-full"
							>
								Посмотреть на карте
								<img
									className="animate-arrow absolute"
									width={"50px"}
									src="https://thumb.tildacdn.com/tild3864-3934-4431-b462-616565636365/-/resize/100x/-/format/webp/photo.png"
									alt="arrow"
								/>
							</Link>
						</motion.div>
					</div>
				</section>

				<section>
					<PlanDay />
				</section>

				<section>
					<div className="custom-container px-5">
						{/* <div className="flex justify-center">
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
                                Важные мелочи
                            </motion.h2>
                        </div> */}
						<div className="">
							<div className="">
								{/* <motion.img
									initial={{ scale: 0.9, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									transition={{
										delay: 0,
										ease: "easeOut",
										duration: 1,
									}}
									className="w-40 mx-auto"
									src="https://optim.tildacdn.com/tild3836-3436-4165-a435-373236613065/-/resize/306x/-/format/webp/photo.png"
									alt="img"
								/> */}
								{/* <motion.p
                                    className="text-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}>
                                    Дорогие гости, приносите с собой веселье и радость в душе, а подарки - в конверте!
                                </motion.p> */}
							</div>
							{/* <div className="">
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                    className="w-40 mx-auto"
                                    src="https://optim.tildacdn.com/tild3161-6164-4530-a462-333537346139/-/resize/306x/-/format/webp/photo.png"
                                    alt="img"
                                />
                                <motion.p
                                    className="text-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}>
                                    К великому сожалению, в ресторане нет
                                    детских зон и нет возможности
                                    пригласить аниматоров для того,
                                    чтобы занять самых маленьких наших
                                    гостей, потому просим заранее подумать
                                    о том, с кем оставить Вашу кроху на
                                    праздничный вечер.
                                </motion.p>
                            </div>
                            <div className="mb-10">
                                <motion.img
                                    className="w-40 mx-auto"
                                    src="https://optim.tildacdn.com/tild3534-3336-4731-b630-326235323734/-/resize/306x/-/format/webp/photo.png" alt="img"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                />
                                <motion.p
                                    className="text-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}>
                                    Главное для нас - ваше присутствие.
                                    Будем признательны за альтернативу
                                    букетам в форме бутылочки алкогольного
                                    напитка и записки о событии, к которому
                                    приурочить ее открытие.
                                </motion.p>
                            </div> */}
						</div>
					</div>
				</section>

				{/* <section>
					<Form />
				</section> */}

				<section>
					<div className="custom-container">
						<div className="">
							<motion.h2
								className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-20"
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
							>
								Контакты
							</motion.h2>
						</div>
						<div className="mt-10">
							<motion.div
								initial={{ y: 40, scale: 0.9, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="w-52 h-52 mx-auto rounded-full overflow-hidden bg-gray-400"
							>
								<Image
									className="w-full h-full object-cover object-top scale-150 "
									style={{
										objectPosition: "60% 20px",
									}}
									src={"/images/image-4.webp"}
									width={1000}
									height={1000}
									alt="img"
								/>
							</motion.div>
							<motion.p
								initial={{ y: 20, scale: 0.9, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="text-lg text-center mt-5"
							>
								Фирдавс:
								<a href="tel:+9989066887707">
									{" "}+998 (90) 668-77-07
								</a>
							</motion.p>
							{/* <motion.p
								initial={{ y: 20, scale: 0.9, opacity: 0 }}
								whileInView={{ y: 0, scale: 1, opacity: 1 }}
								transition={{
									delay: 0,
									ease: "easeOut",
									duration: 1,
								}}
								className="text-lg text-center mt-5"
							>
								Альсина:
								<a href="tel:+998 (88) 223 3355">
									{" "}
									+998 (88) 223 3355
								</a>
							</motion.p> */}
							<div className="flex items-center justify-around mt-7">
								<motion.div
									initial={{ x: -40, scale: 0.9, opacity: 0 }}
									whileInView={{ x: 0, scale: 1, opacity: 1 }}
									transition={{
										delay: 0,
										ease: "easeOut",
										duration: 1,
									}}
								>
									<Link
										href={"https://t.me/firdavs_billion"}
										className="flex text-xs rounded-full border border-blue-700"
									>
										<p className="my-2.5 mx-5 font-serif font-black text-blue-700">
											Telegram
										</p>
										<span className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-700">
											<span className="w-6 h-6 flex items-center justify-center rounded-full border border-blue-700">
												<PiTelegramLogoLight className="text-[17px] text-blue-700" />
											</span>
										</span>
									</Link>
								</motion.div>
								{/* <motion.div
									initial={{ x: 40, scale: 0.9, opacity: 0 }}
									whileInView={{ x: 0, scale: 1, opacity: 1 }}
									transition={{
										delay: 0,
										ease: "easeOut",
										duration: 1,
									}}
								>
									<Link
										href={"https://t.me/alsina15"}
										className="flex text-xs rounded-full border border-pink-700"
									>
										<p className="my-2.5 mx-5 font-serif font-black text-pink-700">
											Telegram
										</p>
										<span className="w-9 h-9 flex items-center justify-center rounded-full border border-pink-700">
											<span className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-700">
												<PiTelegramLogoLight className="text-[17px] text-pink-700" />
											</span>
										</span>
									</Link>
								</motion.div> */}
							</div>
						</div>
					</div>
				</section>
			</main>
			<section className="overflow-hidden mt-5">
				<Counter />
			</section>
		</div>
	);
};

export default Welcome;
