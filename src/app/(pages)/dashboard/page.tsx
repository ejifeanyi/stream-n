import VideoPreview from "@/components/VideoPreview";
import React from "react";

type Props = {};

const dashboard = (props: Props) => {
	return (
		<div className="flex w-full h-full">
			<VideoPreview />
			<div>Dashboard</div>
		</div>
	);
};

export default dashboard;
