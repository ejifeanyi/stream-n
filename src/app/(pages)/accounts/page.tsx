"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = ["Facebook", "YouTube", "TikTok", "Instagram", "Twitch"];

const accounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{ name: "Facebook", isActive: true },
		{ name: "YouTube", isActive: false },
	]);

	const toggleAccount = (name: string) => {
		setConnectedAccounts((prev) =>
			prev.map((account) =>
				account.name === name
					? { ...account, isActive: !account.isActive }
					: account
			)
		);
	};

	const addNewAccount = (name: string) => {
		if (!connectedAccounts.find((account) => account.name === name)) {
			setConnectedAccounts([...connectedAccounts, { name, isActive: false }]);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900">Connected Accounts</h1>
				<p className="text-gray-600 mt-2">
					Manage your connected accounts. Toggle to enable or disable accounts
					for streaming.
				</p>
			</header>

			{/* Connected Accounts List */}
			<div className="bg-white rounded-xl shadow-lg p-6">
				<h2 className="text-lg font-semibold text-gray-800 mb-4">
					Connected Accounts
				</h2>
				<ul className="space-y-4">
					{connectedAccounts.map((account) => (
						<li
							key={account.name}
							className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:shadow transition"
						>
							<div className="flex items-center gap-4">
								<div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold uppercase">
									{account.name[0]}
								</div>
								<span className="text-gray-800 font-medium">
									{account.name}
								</span>
							</div>
							<Switch
								checked={account.isActive}
								onCheckedChange={() => toggleAccount(account.name)}
								className={account.isActive ? "bg-green-500" : "bg-gray-300"}
							/>
						</li>
					))}
				</ul>
			</div>

			{/* Add New Account */}
			<div className="mt-8 flex justify-center">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							Add New Account
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="center"
						className="w-56"
					>
						{services
							.filter(
								(service) =>
									!connectedAccounts.some((account) => account.name === service)
							)
							.map((service) => (
								<DropdownMenuItem
									key={service}
									onClick={() => addNewAccount(service)}
									className="cursor-pointer hover:bg-gray-100"
								>
									{service}
								</DropdownMenuItem>
							))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default accounts;
