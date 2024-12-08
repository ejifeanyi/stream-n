"use client";

import React, { useRef, useState, useEffect } from "react";
import { Settings, Video, VideoOff } from "lucide-react";
import { Button } from "./ui/button";

const VideoPreview = () => {
	const [isLive, setIsLive] = useState(false);
	const [isWebcamOn, setIsWebcamOn] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const startWebcam = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
					audio: true,
				});

				if (videoRef.current) {
					videoRef.current.srcObject = stream;
					setIsWebcamOn(true);
				}
			} catch (error) {
				console.error("Error accessing webcam:", error);
				alert("Could not access webcam. Please check permissions.");
			}
		};

		if (isLive && !isWebcamOn) {
			startWebcam();
		}
	}, [isLive, isWebcamOn]);

	const handleStartLive = () => {
		setIsLive(true);
	};

	const handleEndLive = () => {
		if (videoRef.current && videoRef.current.srcObject) {
			const stream = videoRef.current.srcObject as MediaStream;
			stream.getTracks().forEach((track) => track.stop());
		}

		setIsLive(false);
		setIsWebcamOn(false);
	};

	const openSettings = () => {
		console.log("Open streaming settings");
	};

	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			{/* Video Container */}
			<div className="w-11/12 max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden relative">
				<video
					ref={videoRef}
					className="w-full h-full object-cover"
					autoPlay
					muted
				/>
				{/* Overlay for Webcam Status */}
				{!isWebcamOn && (
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
						<span className="text-xl font-semibold">
							{isLive ? "Connecting..." : "Start streaming"}
						</span>
					</div>
				)}
			</div>

			{/* Buttons Section */}
			<div className="flex items-center gap-6 mt-6">
				<Button
					onClick={openSettings}
					variant="outline"
				>
					<Settings />
					<span>Settings</span>
				</Button>

				{!isLive ? (
					<Button
						onClick={handleStartLive}
						variant="default"
						className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white hover:bg-green-500 rounded-lg transition"
					>
						<Video />
						<span>Go Live</span>
					</Button>
				) : (
					<Button
						onClick={handleEndLive}
						variant="destructive"
						className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-500 rounded-lg transition"
					>
						<VideoOff />
						<span>End Live</span>
					</Button>
				)}
			</div>
		</div>
	);
};

export default VideoPreview;
