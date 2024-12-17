import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PlatformType } from "@prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";
import PlatformConnectionService from "@/lib/platformConnectionService";

export async function POST(request: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const {
		platform,
		accessToken,
		refreshToken,
		platformUserId,
		platformUsername,
	} = await request.json();

	try {
		// Validate platform type
		if (!Object.values(PlatformType).includes(platform)) {
			return NextResponse.json(
				{ error: "Invalid platform type" },
				{ status: 400 }
			);
		}

		// Connect platform
		const connectedAccount = await PlatformConnectionService.connectPlatform(
			session.user.id,
			platform,
			{
				accessToken,
				refreshToken,
				platformUserId,
				platformUsername,
			}
		);

		return NextResponse.json({
			message: "Platform connected successfully",
			account: {
				platform: connectedAccount.platform,
				username: connectedAccount.platformUsername,
			},
		});
	} catch (error) {
		console.error("Platform Connection Error:", error);
		return NextResponse.json(
			{ error: "Failed to connect platform" },
			{ status: 500 }
		);
	}
}

export async function GET(request: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const platformAccounts =
			await PlatformConnectionService.getUserPlatformAccounts(session.user.id);

		return NextResponse.json(platformAccounts);
	} catch (error) {
		console.error("Fetching Platform Accounts Error:", error);
		return NextResponse.json(
			{ error: "Failed to fetch platform accounts" },
			{ status: 500 }
		);
	}
}
