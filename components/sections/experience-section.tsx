"use client";
import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";

import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline";

import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const items = [
    {
        id: 1,
        date: "May 2025 – Jul 2025",
        title: "Products & Distribution Intern",
        company: "Blackstone Group",
        description: (
            <div className="flex flex-col gap-2">
                <ul className="list-disc ml-4">
                    <li>
                        Analyzed HNI/UHNI portfolio datasets using Python,
                        Pandas, Excel, and financial reporting tools.
                    </li>

                    <li>
                        Built KPI dashboards and automated reporting workflows
                        using Pivot Tables, Power Query, and XLOOKUP.
                    </li>

                    <li>
                        Conducted investment product analysis and generated
                        actionable insights through structured reporting.
                    </li>

                    <li>
                        Collaborated with cross-functional teams to improve
                        reporting accuracy and operational efficiency.
                    </li>
                </ul>

                <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Excel</Badge>
                    <Badge variant="outline">Power Query</Badge>
                    <Badge variant="outline">Financial Analytics</Badge>
                </div>
            </div>
        ),
    },

    {
        id: 2,
        date: "Jun 2024 – Jul 2024",
        title: "Analyst Intern",
        company: "Sumitomo Corporation",
        description: (
            <div className="flex flex-col gap-2">
                <ul className="list-disc ml-4">
                    <li>
                        Performed business data analysis, operational reporting,
                        and market research using structured datasets.
                    </li>

                    <li>
                        Developed KPI-driven reports and dashboards to support
                        business decision-making workflows.
                    </li>

                    <li>
                        Collaborated with teams to streamline reporting
                        processes and improve workflow efficiency.
                    </li>
                </ul>

                <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Data Analytics</Badge>
                    <Badge variant="outline">Excel</Badge>
                    <Badge variant="outline">Reporting</Badge>
                    <Badge variant="outline">Business Analysis</Badge>
                </div>
            </div>
        ),
    },

    {
        id: 3,
        date: "2023 – 2027",
        title: "B.Tech CSE (Business Systems)",
        separator: "at",
        company: "VIT, Vellore",
        description: (
            <div className="flex flex-col gap-2">
                <p>
                    Pursuing Bachelor of Technology in Computer Science and
                    Business Systems with a CGPA of <b>8.67</b>.
                </p>

                <ul className="list-disc ml-4">
                    <li>
                        Focused on AI/ML, analytics, cloud systems,
                        and software engineering.
                    </li>

                    <li>
                        Built projects across Machine Learning,
                        Computer Vision, and Cloud Computing.
                    </li>
                </ul>

                <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">AI/ML</Badge>
                    <Badge variant="outline">Cloud</Badge>
                    <Badge variant="outline">Analytics</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                </div>
            </div>
        ),
    },

    {
        id: 4,
        date: "2023",
        title: "Class XII & X (CBSE)",
        separator: "from",
        company: "The Mother’s International School",
        description: (
            <div className="flex flex-col gap-2">
                <p>
                    Completed CBSE Class XII with <b>93%</b> and
                    Class X with <b>97%</b>.
                </p>
            </div>
        ),
    },
];

const ExperienceSection = () => {
    return (
        <div className="w-full xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-8">
            <TextReveal className="text-center">
                Now let&apos;s talk about my experience
            </TextReveal>

            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
            >
                <Timeline defaultValue={items.length}>
                    {items.map((item, index) => (
                        <TimelineItem
                            step={item.id}
                            className="group-data-[orientation=vertical]/timeline:ms-10"
                            key={item.id}
                        >
                            <TimelineHeader>
                                {index !== items.length - 1 && (
                                    <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                                )}

                                <TimelineDate>{item.date}</TimelineDate>

                                <TimelineTitle>
                                    {item.title}{" "}
                                    <span className="font-normal">
                                        {item.separator ?? "at"}
                                    </span>{" "}
                                    <span
                                        className="
                                            font-black
                                            bg-gradient-to-r
                                            from-pink-400
                                            via-fuchsia-500
                                            to-purple-500
                                            bg-clip-text
                                            text-transparent
                                        "
                                    >
                                        {item.company}
                                    </span>
                                </TimelineTitle>

                                <TimelineIndicator className="bg-green-500 text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                                    <CheckIcon size={16} />
                                </TimelineIndicator>
                            </TimelineHeader>

                            <TimelineContent>
                                {item.description}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </motion.div>
        </div>
    );
};

export default ExperienceSection; 
