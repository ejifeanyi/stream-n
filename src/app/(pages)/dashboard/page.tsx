import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {};

const dashboard = (props: Props) => {
	return (
		<div className="flex">
			<Sidebar />
			<div>Dashboard</div>
		</div>
	);
};

export default dashboard;
