import CompletedIcon from "./vectors/CompletedIcon";
import WarningIcon from "./vectors/WarningIcon";

export default function StatusIndicator({
	isCompleted,
	isWarning,
	icon,
	iconSmall,
	label,
}) {
	return (
		<div className="h-[71px] w-[91px] rounded-[10px] bg-[#F5F3FF] flex flex-col items-center justify-center relative">
			<div
				className={`absolute right-[3px] top-0.5 rounded-full h-4 w-4 flex items-center justify-center ${
					isWarning ? "bg-warning" : "bg-primary-500"
				}`}
			>
				{(isCompleted || isWarning) && iconSmall}
			</div>
			<div
				className={`rounded-full ${
					isWarning ? "bg-warning/10" : "bg-primary-200"
				} flex items-center justify-center mb-1 h-[35px] w-[35px]`}
			>
				{isCompleted ? <CompletedIcon /> : isWarning ? <WarningIcon /> : icon}
			</div>
			<p className="text-gray-500 text-[10px]">{label}</p>
		</div>
	);
}
