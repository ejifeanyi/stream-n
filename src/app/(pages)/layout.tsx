import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen bg-background text-foreground">
			<Sidebar />
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default layout;
