import CompletedIcon from "./vectors/CompletedIcon";
import WarningIcon from "./vectors/WarningIcon";

export default function StatusIndicator({ status, icon, iconSmall, label }) {
	return (
		<div className="h-[71px] w-[91px] rounded-[10px] bg-primary-100 flex flex-col items-center justify-center relative">
			<div
				className={`absolute right-[3px] top-0.5 rounded-full h-4 w-4 flex items-center justify-center ${
					status === "warning" ? "bg-warning" : "bg-primary-500"
				}`}
			>
				{(status === "completed" || status === "warning") && iconSmall}
			</div>
			<div
				className={`rounded-full ${
					status === "warning" ? "bg-warning/10" : "bg-primary-200"
				} flex items-center justify-center mb-1 h-[35px] w-[35px]`}
			>
				{status === "completed" ? (
					<CompletedIcon />
				) : status === "warning" ? (
					<WarningIcon />
				) : (
					icon
				)}
			</div>
			<p className="text-gray-500 text-[10px]">{label}</p>
		</div>
	);
}
