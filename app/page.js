import StatusIndicator from "@/components/StatusIndicator";
import GadgetMicIcon from "@/components/vectors/GadgetMicIcon";
import LightingIcon from "@/components/vectors/LightingIcon";
import SpeedIcon from "@/components/vectors/SpeedIcon";
import WebcamIcon from "@/components/vectors/WebcamIcon";
import Image from "next/image";

export default function Home() {
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
				<div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
					<div className="border border-[#755AE2] rounded-[10px] md:max-w-[275px] w-full h-[168px]">
						<Image
							src="/assets/images/placeholder-img.png"
							alt="placeholder"
							width={270}
							height={168}
							className="object-contain"
						/>
					</div>
					<div className="grid grid-cols-2 gap-y-3 gap-x-4">
						<StatusIndicator label="Webcam" icon={<WebcamIcon />} />
						<StatusIndicator label="Speed" icon={<SpeedIcon />} />
						<StatusIndicator label="Gadget Mic" icon={<GadgetMicIcon />} />
						<StatusIndicator label="Lighting" icon={<LightingIcon />} />
					</div>
				</div>
				<div>
					<button className="rounded-lg bg-[#755AE2] text-white py-[13px] px-[17px] text-sm font-medium">
						Take picture and continue
					</button>
				</div>
			</div>
		</main>
	);
}
