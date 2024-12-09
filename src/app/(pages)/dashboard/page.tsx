"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Table } from "@/components/ui/table"; // Ensure this component is properly imported
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for the chart
const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

// Chart configuration object
const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function Dashboard() {
	return (
		<div className="p-6 space-y-10">
			{/* Performance Metrics Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Views Card with Line Chart */}
				<Card className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
					<CardHeader>
						<CardTitle>Views</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer config={chartConfig}>
							<LineChart
								accessibilityLayer
								data={chartData}
								margin={{
									left: 12,
									right: 12,
								}}
							>
								<CartesianGrid vertical={false} />
								<XAxis
									dataKey="month"
									tickLine={false}
									axisLine={false}
									tickMargin={8}
									tickFormatter={(value) => value.slice(0, 3)}
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent hideLabel />}
								/>
								<Line
									dataKey="desktop"
									type="natural"
									stroke="var(--color-desktop)"
									strokeWidth={2}
									dot={false}
								/>
							</LineChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col items-start gap-2 text-sm">
						<div className="flex gap-2 font-medium leading-none">
							Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
						</div>
						<div className="leading-none text-muted-foreground">
							Showing total visitors for the last 6 months
						</div>
					</CardFooter>
				</Card>
			</div>

			{/* Last Live Streams Section */}
			<div className="mt-10">
				<h2 className="text-xl font-semibold mb-4">Last Live Streams</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Stream Cards */}
					{["Stream 1", "Stream 2", "Stream 3"].map((stream, index) => (
						<Card
							key={index}
							className="bg-muted p-4 rounded-lg shadow-sm"
						>
							<CardHeader>
								<CardTitle>{stream}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500">Stream details here...</p>
							</CardContent>
							<CardFooter>
								<button className="text-blue-500">View Stream</button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>

			{/* Connected Accounts Section */}
			<div className="mt-10">
				<h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
				<Table>
					<thead>
						<tr>
							<th>Account</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* Example Connected Account */}
						<tr>
							<td>Facebook</td>
							<td>Connected</td>
							<td>
								<button className="text-blue-500">Deactivate</button>
							</td>
						</tr>
						<tr>
							<td>Twitter</td>
							<td>Connected</td>
							<td>
								<button className="text-blue-500">Deactivate</button>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>

			{/* Recent Activities Section */}
			<div className="mt-10">
				<h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
				<div className="space-y-4">
					<div className="flex items-center justify-between bg-muted p-4 rounded-lg shadow-sm">
						<p className="text-gray-800">User X started streaming</p>
						<span className="text-sm text-gray-500">January 1, 2024</span>
					</div>
					<div className="flex items-center justify-between bg-muted p-4 rounded-lg shadow-sm">
						<p className="text-gray-800">User Y liked your stream</p>
						<span className="text-sm text-gray-500">January 2, 2024</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
