"use client";
import { useState, useEffect, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

import StatusIndicator from "@/components/StatusIndicator";
import GadgetMicIcon, {
	GadgetMicIconSmall,
} from "@/components/vectors/GadgetMicIcon";
import LightingIcon, {
	LightingIconSmall,
} from "@/components/vectors/LightingIcon";
import SpeedIcon, { SpeedIconSmall } from "@/components/vectors/SpeedIcon";
import WebcamIcon, { WebcamIconSmall } from "@/components/vectors/WebcamIcon";

export default function Streaming() {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	const [webcamStatus, setWebcamStatus] = useState("");
	const [lightingStatus, setLightingStatus] = useState("");
	const [micStatus, setMicStatus] = useState("");
	const [speedStatus, setSpeedStatus] = useState("");

	useEffect(() => {
		async function setupCamera() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				videoRef.current.srcObject = stream;
				return new Promise((resolve) => {
					videoRef.current.onloadedmetadata = () => {
						setWebcamStatus("completed");
						resolve(videoRef.current);
					};
				});
			} catch (error) {
				setWebcamStatus("warning");
			}
		}

		async function checkMicrophone() {
			try {
				await navigator.mediaDevices.getUserMedia({ audio: true });
				setMicStatus("completed");
			} catch (error) {
				setMicStatus("warning");
			}
		}

		async function checkInternetSpeed() {
			const startTime = Date.now();
			try {
				await fetch("https://www.google.com", { mode: "no-cors" });
				const endTime = Date.now();
				const duration = endTime - startTime;
				if (duration < 2000) {
					setSpeedStatus("completed");
				} else {
					setSpeedStatus("warning");
				}
			} catch (error) {
				setSpeedStatus("warning");
			}
		}

		async function checkLighting(video) {
			const model = await cocoSsd.load();
			detectFrame(video, model);
		}

		async function runSystemChecks() {
			const video = await setupCamera();
			await checkMicrophone();
			await checkInternetSpeed();
			checkLighting(video);
			video.play();
		}

		function detectFrame(video, model) {
			model.detect(video).then((predictions) => {
				drawPredictions(predictions);
				requestAnimationFrame(() => {
					detectFrame(video, model);
				});
			});
		}

		function drawPredictions(predictions) {
			const ctx = canvasRef.current.getContext("2d");
			canvasRef.current.width = videoRef.current.videoWidth;
			canvasRef.current.height = videoRef.current.videoHeight;
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.drawImage(
				videoRef.current,
				0,
				0,
				ctx.canvas.width,
				ctx.canvas.height
			);

			predictions.forEach((prediction) => {
				const [x, y, width, height] = prediction.bbox;
				ctx.beginPath();
				ctx.rect(x, y, width, height);
				ctx.lineWidth = 2;
				ctx.strokeStyle = "red";
				ctx.fillStyle = "red";
				ctx.stroke();
				ctx.fillText(
					`${prediction.class} - ${Math.round(prediction.score * 100)}%`,
					x,
					y > 10 ? y - 5 : 10
				);
			});

			// Simple lighting check: count the number of non-black pixels
			const imageData = ctx.getImageData(
				0,
				0,
				ctx.canvas.width,
				ctx.canvas.height
			);
			const pixels = imageData.data;
			let brightPixels = 0;

			for (let i = 0; i < pixels.length; i += 4) {
				const r = pixels[i];
				const g = pixels[i + 1];
				const b = pixels[i + 2];
				if (r > 50 || g > 50 || b > 50) {
					brightPixels++;
				}
			}

			const brightness = brightPixels / (pixels.length / 4);
			if (brightness > 0.5) {
				setLightingStatus("completed");
			} else {
				setLightingStatus("warning");
			}
		}

		runSystemChecks();
	}, []);

	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
				<div className="md:max-w-[275px] w-full h-[168px] relative">
					<video
						ref={videoRef}
						className="object-contain border border-primary-500 rounded-[10px] w-full md:max-w-[268px] h-[168px]"
						autoPlay
						playsInline
						muted
					/>
					<canvas
						ref={canvasRef}
						className="absolute inset-0 w-full mad:max-w-[268px] h-[168px] border border-primary-500 rounded-[10px]"
					/>
				</div>
				<div className="grid grid-cols-2 gap-y-3 gap-x-4">
					<StatusIndicator
						label="Webcam"
						icon={<WebcamIcon />}
						iconSmall={<WebcamIconSmall />}
						status={webcamStatus}
					/>
					<StatusIndicator
						label="Speed"
						icon={<SpeedIcon />}
						iconSmall={<SpeedIconSmall />}
						status={speedStatus}
					/>
					<StatusIndicator
						label="Gadget Mic"
						icon={<GadgetMicIcon />}
						iconSmall={<GadgetMicIconSmall />}
						status={micStatus}
					/>
					<StatusIndicator
						label="Lighting"
						icon={<LightingIcon />}
						iconSmall={<LightingIconSmall />}
						status={lightingStatus}
					/>
				</div>
			</div>
			<div>
				<button className="rounded-lg bg-primary-500 text-white py-[13px] px-[17px] text-sm font-medium">
					Take picture and continue
				</button>
			</div>
		</>
	);
}
