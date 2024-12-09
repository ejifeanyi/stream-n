"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";

interface ConnectedAccountItemProps {
	name: string;
	isActive: boolean;
	onToggle: () => void;
}

const ConnectedAccountItem: React.FC<ConnectedAccountItemProps> = ({
	name,
	isActive,
	onToggle,
}) => {
	return (
		<li className="flex items-center justify-between bg-card p-4 rounded-lg hover:shadow-md transition">
			<div className="flex items-center gap-4">
				<div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full text-lg font-bold uppercase">
					{name[0]}
				</div>
				<span className="text-sm font-medium text-foreground">{name}</span>
			</div>
			<Switch
				checked={isActive}
				onCheckedChange={onToggle}
				className={isActive ? "bg-success" : "bg-muted"}
			/>
		</li>
	);
};

export default ConnectedAccountItem;
