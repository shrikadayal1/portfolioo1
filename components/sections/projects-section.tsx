"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ProjectSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8"
		>
			<div className="flex justify-center items-center flex-col gap-4">
				<div className="flex flex-col items-center gap-4">
					<Badge
						variant="destructive"
						className="sm:text-4xl text-3xl font-bold tracking-wide px-6 py-2"
					>
						My Projects
					</Badge>

					<p className="text-center text-muted-foreground max-w-2xl text-sm sm:text-base">
						A collection of AI, Machine Learning, Analytics, and
						Cloud-based projects focused on solving real-world
						business and technology problems through scalable and
						data-driven solutions.
					</p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10"
				>
					{/* Emotion Detection */}
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full bg-pink-900 min-h-[500px] lg:min-h-[300px] overflow-hidden">
							<Link
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0 z-10"
							></Link>

							<div className="lg:max-w-lg w-full relative z-20">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									Emotion Detection System
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									Developed a real-time emotion detection system
									using YOLO and Roboflow for facial emotion
									recognition. Implemented image preprocessing,
									dataset annotation, augmentation workflows,
									and real-time inference pipelines for emotion
									classification and analytics.
								</p>
							</div>

							<Image
								src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
								width={650}
								height={500}
								alt="emotion-detection-project"
								className="absolute right-0 top-0 h-full w-[45%] object-cover opacity-35"
							/>
						</WobbleCard>
					</motion.div>

					{/* AQI Sense */}
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="col-span-1 lg:col-span-2"
					>
						<WobbleCard containerClassName="w-full h-full bg-emerald-900 min-h-[500px] xl:min-h-[300px] overflow-hidden">
							<Link
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0 z-10"
							></Link>

							<div className="lg:max-w-xs w-full relative z-20">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									AQI Sense
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									Built an end-to-end machine learning pipeline
									for AQI prediction using ensemble learning
									models. Performed exploratory data analysis,
									feature engineering, preprocessing, and
									predictive analytics on environmental datasets
									with an interactive Streamlit dashboard for
									visualization and forecasting.
								</p>
							</div>

							<Image
								src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop"
								width={600}
								height={500}
								alt="aqi-sense-project"
								className="absolute right-0 top-0 h-full w-[40%] object-cover opacity-40"
							/>
						</WobbleCard>
					</motion.div>

					{/* SmartShield */}
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="col-span-1"
					>
						<WobbleCard containerClassName="min-h-[300px] bg-violet-900 overflow-hidden">
							<Link
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0 z-10"
							></Link>

							<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white relative z-20">
								SmartShield
							</h2>

							<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 relative z-20">
								Built a real-time UPI fraud detection system using
								machine learning classification and anomaly
								detection techniques. Implemented fraud risk
								scoring workflows, predictive fraud modeling,
								and transaction analytics dashboards for
								intelligent fraud monitoring.
							</p>

							<Image
								src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
								width={500}
								height={500}
								alt="fraud-detection-project"
								className="absolute right-0 bottom-0 h-full w-full object-cover opacity-20"
							/>
						</WobbleCard>
					</motion.div>

					{/* Carbon Aware Framework */}
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-slate-900 min-h-[500px] lg:min-h-[300px] overflow-hidden">
							<Link
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0 z-10"
							></Link>

							<div className="lg:max-w-lg w-full relative z-20">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									Carbon-Aware SLA Framework
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									Designed a carbon-aware cloud scheduling
									framework for sustainable microservice
									execution. Implemented predictive
									carbon-intensity forecasting and SLA-aware
									workload scheduling, achieving nearly 9%
									reduction in cumulative carbon emissions
									without violating SLA constraints.
								</p>
							</div>

							<Image
								src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
								width={650}
								height={500}
								alt="carbon-aware-framework"
								className="absolute right-0 top-0 h-full w-[45%] object-cover opacity-30"
							/>
						</WobbleCard>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex justify-center"
			>
				<h2 className="sm:text-2xl text-xl font-bold tracking-wide">
					...and many more
				</h2>
			</motion.div>
		</motion.div>
	);
};

export default ProjectSection;