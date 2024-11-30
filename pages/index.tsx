"use client";
import { useState, useEffect } from "react";
import Animate from "@/components/Animate";

export default function Home() {
	const [active, setActive] = useState(true);
	const [hide, setHide] = useState(true);

	useEffect(() => {
		const audio = document.querySelector("audio");
		if (active) {
			audio?.play();
		} else {
			audio?.pause();
		}
	}, [active]);

	return (
		<>
			<Animate setHide={setHide} />
		</>
	);
}
