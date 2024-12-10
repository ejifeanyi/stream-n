import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen bg-background text-foreground">
			<Sidebar />

			{/* Add margin-left for main content to create space after the sidebar */}
			<main className="flex-grow overflow-y-auto lg:ml-[250px] px-4 md:px-8 lg:px-12">
				{children}
			</main>
		</div>
	);
};

export default layout;
