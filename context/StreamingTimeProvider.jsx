"use client";
import { createContext, useContext, useState } from "react";

const StreamingTimeContext = createContext();

export default function StreamingTimeProvider({ children }) {
	const [isRunning, setIsRunning] = useState(false);

	return (
		<StreamingTimeContext.Provider value={{ isRunning, setIsRunning }}>
			{children}
		</StreamingTimeContext.Provider>
	);
}

export function useStreamingTimeContext() {
	const context = useContext(StreamingTimeContext);

	if (context === undefined) {
		throw new Error(
			"useStreamingTimeContext must be used within a StreamingTimeProvider"
		);
	}

	return context;
}
