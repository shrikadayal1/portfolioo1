"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import skills from "./data/skills";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const SkillSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-14 overflow-x-hidden"
		>
			{/* MY SKILLS */}
			<div className="flex justify-center items-center">
				<Badge
					variant="default"
					className="sm:text-4xl text-2xl font-black tracking-wide px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 text-black border-0 shadow-2xl"
				>
					MY SKILLS
				</Badge>
			</div>

			{Object.keys(skills).map((skill) => (
				<React.Fragment key={skill}>
					<div className="flex flex-col items-start gap-8">
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="sm:text-4xl text-3xl font-bold tracking-wide text-left bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
						>
							{skill}
						</motion.h2>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="flex gap-4 flex-wrap justify-start"
						>
							{skills[skill].map((technology) => (
								<motion.div
									key={technology.name}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4 }}
									whileHover={{ scale: 1.08 }}
								>
									<Button
										variant="outline"
										size="sm"
										className="text-md border border-pink-400/30 bg-black/40 backdrop-blur-md text-white hover:bg-pink-400/10 hover:border-fuchsia-400 hover:text-pink-200 transition-all duration-300 rounded-xl px-4 py-5"
									>
										<Image
											width={18}
											height={18}
											alt={technology.name}
											src={technology.img}
											className="rounded-sm"
										/>

										<span>{technology.name}</span>
									</Button>
								</motion.div>
							))}
						</motion.div>
					</div>

					<Separator className="my-2 bg-white/10" />
				</React.Fragment>
			))}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="flex justify-start pt-4"
			>
				<h2 className="sm:text-2xl text-xl font-bold tracking-wide bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
					...and many more
				</h2>
			</motion.div>
		</motion.div>
	);
};

export default SkillSection;