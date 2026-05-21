"use client";

import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const IntroSection = () => {
	return (
		<div
			className="w-full py-4 flex flex-col gap-40 overflow-x-hidden"
			id="about"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="sm:px-30 px-8"
			>
				<motion.h2
					initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="sm:text-4xl text-3xl font-bold tracking-wide text-white"
				>
					I am an
				</motion.h2>

				<motion.h1
					initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
					whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="md:text-7xl sm:text-5xl text-4xl font-bold"
				>
					<span className="animate-text bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent">
						AI Enthusiast
					</span>
				</motion.h1>

				<motion.h1
					initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
					whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="md:text-7xl sm:text-5xl text-4xl font-bold"
				>
					<span className="animate-text bg-gradient-to-r from-fuchsia-300 via-pink-400 to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent">
						 FinanceGeek
					</span>
				</motion.h1>

				<motion.h1
					initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
					whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="md:text-7xl sm:text-5xl text-4xl font-bold"
				>
					<span className="animate-text bg-gradient-to-r from-pink-300 via-violet-400 to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent">
						Business + Tech Enthusiast
					</span>
				</motion.h1>
			</motion.div>

			<div className="flex w-full flex-col items-center justify-center">
				<div className="sm:px-30 px-8 mb-10">
					<Badge
						variant="secondary"
						className="sm:text-4xl text-3xl font-bold tracking-wide"
					>
						I explore
					</Badge>
				</div>

				<div className="relative w-full overflow-hidden">
					<VelocityScroll defaultVelocity={2}>
						AI • Branding • Strategy • Business • Product Thinking •
						Finance • Consumer Psychology • Digital Experiences •
						Innovation • Technology •
					</VelocityScroll>

					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>

					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
				</div>
			</div>
		</div>
	);
};

export default IntroSection;