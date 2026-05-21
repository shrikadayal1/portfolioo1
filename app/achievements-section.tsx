"use client";

import React from "react";
import { motion } from "framer-motion";

const ntSection = () => {
	return (
		<section
			className="w-full py-24 flex flex-col items-center justify-center px-6"
			id="nts"
		>
			{/* Heading */}
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-5xl md:text-7xl font-bold text-white text-center"
			>
				Positions of Responsibility
			</motion.h1>

			{/* Card */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
			>
				<div className="flex flex-col gap-6">
					{/* Role */}
					<div>
						<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
							 FinanceGeektary • Blockchain Club, VIT Vellore
						</h2>

						<p className="text-zinc-400 mt-3 text-lg">
							Jan 2026 – Present
						</p>
					</div>

					{/* Description */}
					<div className="space-y-5 text-zinc-300 text-lg leading-relaxed">
						<p>
							Led and coordinated one of the university’s growing
							blockchain and Web3 communities, managing both
							technical and operational initiatives across a
							network of 150+ student members.
						</p>

						<p>
							Organized technical workshops, speaker sessions,
							community events, and collaborative learning
							initiatives focused on blockchain technology,
							decentralized systems, and emerging Web3 trends.
						</p>

						<p>
							Collaborated with cross-functional student teams for
							event execution, technical outreach, branding, and
							community engagement while strengthening leadership,
							communication, and organizational management skills.
						</p>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
						<div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
							<h3 className="text-4xl font-bold text-pink-400">
								150+
							</h3>
							<p className="text-zinc-400 mt-2">
								Community Members
							</p>
						</div>

						<div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
							<h3 className="text-4xl font-bold text-fuchsia-400">
								Web3
							</h3>
							<p className="text-zinc-400 mt-2">
								Technical Community
							</p>
						</div>

						<div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
							<h3 className="text-4xl font-bold text-purple-400">
								Leadership
							</h3>
							<p className="text-zinc-400 mt-2">
								Event & Team Management
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default ntSection;