"use client";

import React, { useState } from "react";

import { Home, User, RadioTower, Settings, LogOut, Menu } from "lucide-react";

const Sidebar = () => {
	const [selected, setSelected] = useState("dashboard");
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ id: "dashboard", name: "Dashboard", icon: <Home /> },
		{ id: "accounts", name: "Accounts", icon: <User /> },
		{ id: "go-live", name: "Go Live", icon: <RadioTower /> },
		{ id: "settings", name: "Settings", icon: <Settings /> },
		{ id: "logout", name: "Logout", icon: <LogOut /> },
	];

	return (
		<div className="flex h-screen border-r border-gray-200">
			<div className="mt-[150px] mx-3 fixed z-50 lg:relative flex flex-col bg-white text-gray-900 transition-all duration-300">
				<div className="flex-grow">
					{menuItems.map((item) => (
						<button
							key={item.id}
							onClick={() => setSelected(item.id)}
							className={`flex items-center w-full mb-2 rounded-xl p-4 text-left text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
								selected === item.id ? "bg-black text-white" : "text-gray-800"
							}`}
						>
							<div className="text-xl">{item.icon}</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
