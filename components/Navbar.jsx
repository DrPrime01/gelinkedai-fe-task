import Image from "next/image";

export default function Navbar() {
	return (
		<header className="bg-white pt-6 pb-3 px-6 md:px-[105px]">
			<nav className="flex items-center justify-between">
				<div className="flex items-center gap-x-3">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={63}
						height={62}
					/>
					<div className="flex flex-col gap-y-[3px]">
						<p className="text-xl font-medium">Frontend developer</p>
						<p className="text-sm text-gray-200">Skill assessment test</p>
					</div>
				</div>
				<div className="flex items-center gap-x-2.5">
					<div className="rounded-lg py-2.5 px-4 bg-[#ECE8FF] flex items-center gap-x-2.5">
						<Image
							src="/assets/icons/timer-icon.svg"
							alt="timer-icon"
							width={24}
							height={24}
						/>
						<p className="text-primary-500 text-lg font-bold">
							29:10 <span className="text-sm font-medium">time left</span>
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
