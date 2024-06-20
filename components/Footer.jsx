import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-10 px-[105px] mb-9 mt-12 bg-transparent">
			<p className="text-sm text-[#8C8CA1]">
				POWERED BY{" "}
				<Link
					href="https://app.getlinked.ai"
					target="_blank"
					className="text-lg font-medium text-[#0E0E2C]"
				>
					Getlinked.AI
				</Link>
			</p>
		</footer>
	);
}
