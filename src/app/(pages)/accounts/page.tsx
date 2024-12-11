"use client";

import React, { useState } from "react";
import ConnectedAccountItem from "@/components/ConnectedAccountItem";
import AddNewAccountDropdown from "@/components/AddNewAccountDropdown";

const services = ["Facebook", "YouTube", "TikTok", "Instagram", "Twitch"];

const AccountsPage = () => {
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
		<div className="min-h-screen bg-background p-8">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-2xl sm:text-3xl font-bold text-foreground">
					Accounts
				</h1>
				<p className="text-muted-foreground mt-2 text-sm sm:text-base">
					Manage your connected accounts. Toggle to enable or disable accounts
					for streaming.
				</p>
			</header>

			{/* Connected Accounts List */}
			<div className="bg-card rounded-xl p-6">
				<h2 className="text-lg font-semibold text-foreground mb-4">
					Connected Accounts
				</h2>
				<ul className="space-y-4">
					{connectedAccounts.map((account) => (
						<ConnectedAccountItem
							key={account.name}
							name={account.name}
							isActive={account.isActive}
							onToggle={() => toggleAccount(account.name)}
						/>
					))}
				</ul>
			</div>

			{/* Add New Account */}
			<div className="mt-8 flex justify-center">
				<AddNewAccountDropdown
					services={services}
					connectedAccounts={connectedAccounts.map((acc) => acc.name)}
					onAdd={addNewAccount}
				/>
			</div>
		</div>
	);
};

export default AccountsPage;
