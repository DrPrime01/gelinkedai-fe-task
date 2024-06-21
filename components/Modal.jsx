import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Modal({ openModal, closeModal }) {
	return (
		<div
			onClick={(e) => e.target === e.currentTarget && closeModal()}
			className={`fixed w-full h-full inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden transition-opacity delay-[50ms] ${
				openModal ? "opacity-100" : "opacity-0"
			}`}
		>
			<div
				className={`flex flex-col max-w-[472px] bg-[#F5F3FF] w-full md:max-h-[314px] box-border rounded-[18px] md:h-full transition-transform duration-200 delay-100 ${
					openModal ? "scale-100" : "scale-75"
				}`}
			>
				<div className="bg-primary-500 pt-5 px-6 pb-3 flex items-center justify-between">
					<h3 className="text-white font-medium">Start assessment</h3>
					<button
						onClick={closeModal}
						className={`rounded-[9px] py-2 px-[22px] bg-primary-100/20 text-white text-xs ${nunito.className}`}
					>
						Close
					</button>
				</div>
				<div className="flex flex-col justify-center text-center pt-[34px] flex-1 max-w-[335px] mx-auto">
					<h3 className="mb-2 text-xl text-primary-500 font-semibold">
						Proceed to start assessment
					</h3>
					<p className="text-sm text-primary-300">
						Kindly keep to the rules of the assessment and sit up, stay in front
						of your camera/webcam and start your assessment.
					</p>
				</div>
				<div className="bg-white rounded-t-[18px] py-[18px] px-[34px] flex justify-end">
					<button
						className="rounded-lg bg-primary-500 text-white py-3 px-10"
						onClick={closeModal}
					>
						Proceed
					</button>
				</div>
			</div>
		</div>
	);
}
