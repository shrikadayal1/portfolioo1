interface Skills {
	[skill: string]: {
		name: string;
		img: string;
	}[];
}

const skills: Skills = {
	"AI + Analytics": [
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
			name: "Roboflow",
			img: "https://avatars.githubusercontent.com/u/53104146?s=200&v=4",
		},
		{
			name: "Pandas",
			img: "https://cdn.svgporn.com/logos/pandas-icon.svg",
		},
		{
			name: "NumPy",
			img: "https://cdn.svgporn.com/logos/numpy.svg",
		},
		{
			name: "Feature Engineering",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		},
	],

	"Business + Finance": [
		{
			name: "Financial Reporting",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "KPI Dashboards",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
		},
		{
			name: "Business Analytics",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "Market Research",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "Investment Analysis",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
		},
		{
			name: "Excel",
			img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
		},
		{
			name: "Power Query",
			img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
		},
		{
			name: "Pivot Tables",
			img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
		},
	],

	"Programming": [
		{
			name: "Python",
			img: "https://cdn.svgporn.com/logos/python.svg",
		},
		{
			name: "Java",
			img: "https://cdn.svgporn.com/logos/java.svg",
		},
		{
			name: "C",
			img: "https://cdn.svgporn.com/logos/c.svg",
		},
		{
			name: "C++",
			img: "https://cdn.svgporn.com/logos/c-plusplus.svg",
		},
		{
			name: "SQL",
			img: "https://cdn.svgporn.com/logos/mysql.svg",
		},
		{
			name: "JavaScript",
			img: "https://cdn.svgporn.com/logos/javascript.svg",
		},
	],

	"Web + Product": [
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
			name: "HTML",
			img: "https://cdn.svgporn.com/logos/html-5.svg",
		},
		{
			name: "CSS",
			img: "https://cdn.svgporn.com/logos/css-3.svg",
		},
		{
			name: "Streamlit",
			img: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
		},
	],

	"Cloud + Tools": [
		{
			name: "AWS",
			img: "https://cdn.svgporn.com/logos/aws.svg",
		},
		{
			name: "Docker",
			img: "https://cdn.svgporn.com/logos/docker-icon.svg",
		},
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
			name: "Jupyter Notebook",
			img: "https://cdn.svgporn.com/logos/jupyter.svg",
		},
	],
};

export default skills;