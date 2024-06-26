"use client";
import { useState, useEffect } from "react";

import Streaming from "@/components/Streaming";
import Modal from "@/components/Modal";

export default function Home() {
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		setOpenModal(true);
	}, []);

	return (
		<main className="flex justify-center p-6">
			<div className="max-w-[832px] w-full flex flex-col bg-white rounded-[20px] pt-9 px-12 pb-11">
				<h3 className="font-medium text-xl mb-2">System check</h3>
				<p className="text-sm text-gray-500 mb-[30px]">
					We utilize your camera image to ensure fairness for all participants,
					and we also employ both your camera and microphone for a video
					questions where you will be prompted to record a response using your
					camera or webcam, so it&apos;s essential to verify that your camera
					and microphone are functioning correctly and that you have a stable
					internet connection. To do this, please position yourself in front of
					your camera, ensuring that your entire face is clearly visible on the
					screen. This includes your forehead, eyes, ears, nose, and lips. You
					can initiate a 5-second recording of yourself by clicking the button
					below.
				</p>
				<Streaming />
			</div>

			<Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
		</main>
	);
}
