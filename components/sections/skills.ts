interface Skills {
	[skill: string]: {
		name: string;
		img: string;
	}[];
}

const skills: Skills = {
	"Web Development": [
		{
			name: "HTML",
			img: "https://cdn.svgporn.com/logos/html-5.svg",
		},
		{
			name: "CSS",
			img: "https://cdn.svgporn.com/logos/css-3.svg",
		},
		{
			name: "JavaScript",
			img: "https://cdn.svgporn.com/logos/javascript.svg",
		},
		{
			name: "ReactJS",
			img: "https://cdn.svgporn.com/logos/react.svg",
		},
		{
			name: "NextJS",
			img: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
		},
		{
			name: "TailwindCSS",
			img: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
		},
		{
			name: "Bootstrap",
			img: "https://cdn.svgporn.com/logos/bootstrap.svg",
		},
	],

	"AI / Machine Learning": [
		{
			name: "Machine Learning",
			img: "https://cdn.svgporn.com/logos/tensorflow.svg",
		},
		{
			name: "Scikit-learn",
			img: "https://cdn.svgporn.com/logos/scikit-learn.svg",
		},
		{
			name: "Computer Vision",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
		},
		{
			name: "YOLO",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		},
		{
			name: "Pandas",
			img: "https://cdn.svgporn.com/logos/pandas-icon.svg",
		},
		{
			name: "NumPy",
			img: "https://cdn.svgporn.com/logos/numpy.svg",
		},
	],

	"Programming Languages": [
		{
			name: "Python",
			img: "https://cdn.svgporn.com/logos/python.svg",
		},
		{
			name: "Java",
			img: "https://cdn.svgporn.com/logos/java.svg",
		},
		{
			name: "C++",
			img: "https://cdn.svgporn.com/logos/c-plusplus.svg",
		},
		{
			name: "SQL",
			img: "https://cdn.svgporn.com/logos/mysql.svg",
		},
	],

	"Tools & Platforms": [
		{
			name: "Git",
			img: "https://cdn.svgporn.com/logos/git-icon.svg",
		},
		{
			name: "GitHub",
			img: "https://cdn.svgporn.com/logos/github-icon.svg",
		},
		{
			name: "Postman",
			img: "https://cdn.svgporn.com/logos/postman-icon.svg",
		},
		{
			name: "VS Code",
			img: "https://cdn.svgporn.com/logos/visual-studio-code.svg",
		},
		{
			name: "AWS",
			img: "https://cdn.svgporn.com/logos/aws.svg",
		},
	],

	"Business & Analytics": [
		{
			name: "Excel",
			img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
		},
		{
			name: "Financial Analysis",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "Business Analytics",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "KPI Dashboards",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
		},
	],
};

export default skills;