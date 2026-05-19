"use client";

import React from "react";
import { TextReveal } from "../magicui/text-reveal";
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
			easing: "ease-out",
		},

		viewport: { once: true, margin: "-80px" },
	};

	return (
		<>
			<div className="pb-10">

				<TextReveal className="text-center">
					Looks like you unlocked my favorites!
				</TextReveal>

				<div className="flex flex-col gap-10 lg:px-30 px-8">

					<motion.h2
						className="text-4xl font-bold text-center"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<AuroraText>Beyond code, here’s what I love</AuroraText>
					</motion.h2>

					<motion.div
						className="max-w-5xl mx-auto text-center text-white/80 text-lg leading-9"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>

						I’m deeply interested in building ideas at the
						intersection of AI, finance, branding, and modern
						digital culture. I’m fascinated by how world-class
						companies combine technology, strategy, design, and
						storytelling to create products people genuinely
						connect with. I naturally gravitate toward ambitious
						thinking, elegant aesthetics, high-performance
						environments, and systems built with precision and
						intent.
						<br />
						<br />
						Outside tech, I enjoy studying consumer psychology,
						financial markets, luxury brand positioning, and
						modern startups shaping global culture. I’m also
						inspired by minimalist design, cinematic storytelling,
						architecture, curated music, and thoughtfully crafted
						digital experiences — always aiming to build work that
						feels impactful, refined, and built to last.

					</motion.div>

					<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

						{/* CARD 1 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-orange-900 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Stripe
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Finance with taste. Infrastructure and simplicity combined beautifully.
									</p>
								</div>

								<img
									src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg"
									alt="Stripe"
									className="w-16 h-16 object-contain rounded-xl bg-white p-2"
								/>

							</div>

						</motion.div>

						{/* CARD 2 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-green-900 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Bloomberg Terminal
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Where data meets decisions and markets move in real time.
									</p>
								</div>

								<img
									src="https://www.thebalancemoney.com/thmb/ROPYcIKeb6uEMzjXtJQHaPiHJzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-526663126-1edf624c7b38489a9c8c38948aadfd5f.jpg"
									alt="Bloomberg"
									className="w-16 h-16 object-cover rounded-xl"
								/>

							</div>

						</motion.div>

						{/* CARD 3 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-blue-900 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Warren Buffett
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Long-term thinking, patience, and disciplined decisions.
									</p>
								</div>

								<img
									src="https://upload.wikimedia.org/wikipedia/commons/5/51/Warren_Buffett_KU_Visit.jpg"
									alt="Warren Buffett"
									className="w-16 h-16 object-cover rounded-xl"
								/>

							</div>

						</motion.div>

						{/* CARD 4 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-purple-900 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Falguni Nayar
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										An inspiring example of combining business,
										branding, fashion, and long-term vision.
									</p>
								</div>

								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls7gUqmwdTo3Gn9FJu07VLar1a2fMJ6hJ5A&s"
									alt="Falguni Nayar"
									className="w-16 h-16 object-cover rounded-xl"
								/>

							</div>

						</motion.div>

						{/* CARD 5 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-zinc-800 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Global Finance
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Interested in financial systems, investing,
										and how capital shapes industries.
									</p>
								</div>

								<img
									src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
									alt="Finance"
									className="w-16 h-16 object-cover rounded-xl bg-white p-2"
								/>

							</div>

						</motion.div>

						{/* CARD 6 */}
						<motion.div
							{...cardAnim}
							className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-cyan-900 to-black"
						>

							<div className="flex justify-between items-start gap-4">

								<div>
									<h3 className="text-3xl font-bold text-white">
										Modern Startups
									</h3>

									<p className="text-white/70 mt-4 leading-7 max-w-xs">
										Ambitious companies combining technology,
										branding, growth, and digital culture.
									</p>
								</div>

								<img
									src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png"
									alt="Startup"
									className="w-16 h-16 object-cover rounded-xl bg-white p-2"
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
					Scroll complete
					<br />
					Mission continues...
				</motion.h1>

			</div>
		</>
	);
};

export default FavouriteSection;