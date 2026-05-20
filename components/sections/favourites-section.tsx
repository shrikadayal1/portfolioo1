"use client";

import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";
import { AuroraText } from "../magicui/aurora-text";
import { GradientBars } from "../ui/gradient-bars";
import { motion } from "motion/react";

const FavouriteSection = () => {

	const cardAnim = {
		initial: {
			opacity: 0,
			y: 40,
			scale: 0.95,
			filter: "blur(6px)",
		},

		whileInView: {
			opacity: 1,
			y: 0,
			scale: 1,
			filter: "blur(0px)",
		},

		transition: {
			duration: 0.6,
			ease: "easeOut",
		},

		viewport: { once: true, margin: "-80px" },
	};

	return (
		<>
			<div className="pb-20">

				<TextReveal className="text-center">
					A glimpse into the world that inspires me
				</TextReveal>

				<div className="flex flex-col gap-10 lg:px-30 px-8">

					<motion.h2
						className="text-4xl font-bold text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<AuroraText>
							Beyond code here’s what drives me
						</AuroraText>
					</motion.h2>

					<motion.div
						className="max-w-6xl mx-auto text-center text-white/80 text-lg leading-10"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>

						Beyond tech, I’m deeply interested in building ideas
						at the intersection of AI, finance, branding, and
						modern digital culture. I’m fascinated by how
						world-class companies combine technology, strategy,
						design, and storytelling to create products people
						genuinely connect with.
						<br />
						<br />
						I naturally gravitate toward ambitious thinking,
						elegant aesthetics, high-performance environments,
						and systems built with precision and intent.
						Whether it’s technology, business, or branding,
						I’m always drawn toward creating work that feels
						impactful, refined, and built to last.
						<br />
						<br />
						Outside coding, I enjoy studying consumer psychology,
						financial markets, luxury brand positioning,
						minimalist architecture, cinematic storytelling,
						curated music, and the evolution of startups shaping
						global culture.

					</motion.div>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

						{/* STRIPE */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-indigo-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Stripe
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Clean design, elite engineering,
										and financial infrastructure built
										with elegance and simplicity.
									</p>
								</div>

								<img
									src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg"
									alt="Stripe"
									className="w-20 h-20 object-contain rounded-2xl bg-white p-3"
								/>

							</div>

						</motion.div>

						{/* BLOOMBERG */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-orange-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Bloomberg Terminal
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										The intensity of markets, data,
										and real-time decision making
										deeply fascinates me.
									</p>
								</div>

								<img
									src="https://www.thebalancemoney.com/thmb/ROPYcIKeb6uEMzjXtJQHaPiHJzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-526663126-1edf624c7b38489a9c8c38948aadfd5f.jpg"
									alt="Bloomberg"
									className="w-32 h-32 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* WARREN BUFFETT */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-green-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Warren Buffett
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Long-term thinking, discipline,
										and timeless decision making.
									</p>
								</div>

								<img
									src="https://upload.wikimedia.org/wikipedia/commons/5/51/Warren_Buffett_KU_Visit.jpg"
									alt="Warren Buffett"
									className="w-24 h-24 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* FALGUNI NAYAR */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-pink-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Falguni Nayar
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										An inspiring blend of branding,
										business, luxury, and long-term vision.
									</p>
								</div>

								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls7gUqmwdTo3Gn9FJu07VLar1a2fMJ6hJ5A&s"
									alt="Falguni Nayar"
									className="w-24 h-24 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* LEENA NAIR */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-yellow-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Leena Nair
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Global leadership, elegance,
										and redefining modern luxury culture.
									</p>
								</div>

								<img
									src="https://www.abouther.com/sites/default/files/2021/12/15/leena_nair_1.jpg"
									alt="Leena Nair"
									className="w-24 h-24 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* LUXURY BRANDING */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-zinc-800 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Luxury Branding
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										I admire brands that combine aesthetics,
										storytelling, exclusivity,
										and emotional connection flawlessly.
									</p>
								</div>

								<img
									src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
									alt="Luxury Branding"
									className="w-28 h-28 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* MODERN STARTUPS */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-cyan-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Modern Startups
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Startups shaping culture through
										technology, product thinking,
										and digital influence.
									</p>
								</div>

								<img
									src="https://images.unsplash.com/photo-1552664730-d307ca884978"
									alt="Startup"
									className="w-28 h-28 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* AI + FINANCE */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-blue-950 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										AI & Finance
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Especially interested in how AI is
										transforming finance, products,
										and consumer behavior globally.
									</p>
								</div>

								<img
									src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
									alt="AI Finance"
									className="w-28 h-28 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

						{/* MINIMAL DESIGN */}
						<motion.div
							{...cardAnim}
							className="rounded-3xl p-7 border border-white/10 bg-gradient-to-br from-neutral-900 to-black"
						>

							<div className="flex justify-between items-start gap-6">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Minimal Design
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Clean interfaces, thoughtful systems,
										and refined aesthetics always
										stand out to me.
									</p>
								</div>

								<img
									src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
									alt="Minimal Design"
									className="w-28 h-28 object-cover rounded-2xl"
								/>

							</div>

						</motion.div>

					</div>

				</div>

			</div>

			<div className="h-screen flex items-center justify-center relative">

				<GradientBars colors={["#7928CA", "transparent"]} />

				<motion.h1
					className="text-center md:text-7xl text-5xl font-bold z-10"
					initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					Building ideas
					<br />
					that actually last
				</motion.h1>

			</div>
		</>
	);
};

export default FavouriteSection;