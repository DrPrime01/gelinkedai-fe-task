"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useStreamingTimeContext } from "@/context/StreamingTimeProvider";

export default function Navbar() {
	const { isRunning, setIsRunning } = useStreamingTimeContext();
	const [timeLeft, setTimeLeft] = useState(300);

	useEffect(() => {
		let timerId;

		if (isRunning) {
			timerId = setInterval(() => {
				setTimeLeft((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(timerId);
						setIsRunning(false);
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);
		} else {
			setTimeLeft(300);
		}

		return () => clearInterval(timerId);
	}, [isRunning, setIsRunning]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};

	return (
		<header className="bg-white pt-6 pb-3 px-6 md:px-[105px]">
			<nav className="flex items-center justify-between">
				<div className="flex items-center gap-x-2 md:gap-x-3">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={63}
						height={62}
					/>
					<div className="flex flex-col gap-y-0.5 md:gap-y-[3px]">
						<p className="text-sm md:text-xl font-medium">Frontend developer</p>
						<p className="text-xs md:text-sm text-gray-200">
							Skill assessment test
						</p>
					</div>
				</div>
				<div className="flex items-center gap-x-1.5 md:gap-x-2.5">
					<div className="rounded-lg p-2 md:py-2.5 md:px-4 bg-[#ECE8FF] flex items-center gap-x-1.5 md:gap-x-2.5">
						<Image
							src="/assets/icons/timer-icon.svg"
							alt="timer-icon"
							width={24}
							height={24}
						/>
						<p className="text-primary-500 text-sm md:text-lg font-bold w-fit">
							{formatTime(timeLeft)} <br className="md:hidden" />
							<span className="text-sm font-medium">time left</span>
						</p>
					</div>
					<Image
						src="/assets/icons/eye-icon.svg"
						alt="eye-icon"
						width={30}
						height={30}
					/>
				</div>
			</nav>
		</header>
	);
}
