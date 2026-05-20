"use client";
import React from "react";
import { LampContainer } from "../ui/lamp-container";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div
			id="hero"
			className="relative flex flex-col h-[100vh] w-full items-center justify-center"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.35),transparent_45%)] z-0" />

			<LampContainer className="h-screen">
				<motion.h1
					initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
					animate={{ opacity: 1, y: 0, filter: "none" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative z-10 mt-8 py-4 text-center text-5xl font-bold tracking-tighter md:text-6xl lg:text-8xl"
				>
					Hello, I am <br />
					<span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
						Shrika Dayal
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.7,
						duration: 0.8,
					}}
					className="relative z-10 mt-6 max-w-2xl text-center text-base text-muted-foreground md:text-lg"
				>
					AI Enthusiast •  Geek • Business + Tech Enthusiast
					<br />
					Passionate about building modern digital experiences,
					scalable systems, and ambitious ideas at the intersection
					of technology, strategy, branding, and innovation.
				</motion.p>

				<motion.div
					className="relative z-10 flex gap-4 mt-16"
					initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
					animate={{ opacity: 1, y: 0, filter: "none" }}
					transition={{
						delay: 1,
						duration: 0.8,
						type: "spring",
					}}
				>
					<Link href="mailto:shrika.dayal2023@vitstudent.ac.in">
						<Button
							size="xl"
							className="!z-20 bg-pink-500 hover:bg-pink-600 text-white"
						>
							Get In Touch
						</Button>
					</Link>
				</motion.div>
			</LampContainer>
		</div>
	);
};

export default HeroSection;