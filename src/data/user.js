const INFO = {
	main: {
		title: "Walstan Baptista",
		name: "Walstan Baptista",
		email: "walstanb@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/walstanb",
		linkedin: "https://linkedin.com/in/walstanb",
		instagram: "https://instagram.com/walstn",
		medium: "https://walstanb.medium.com/",
		discord: "https://discordapp.com/users/481185604252598300",
	},

	homepage: {
		title: "Software Engineer, and AI enthusiast",
		description:
			"Hi, I'm Walstan, a software engineer who loves creating efficient and reliable solutions to complex problems. I'm always looking for new challenges to expand my knowledge and skills, and I enjoy keeping up with the latest developments in AI. I'm pretty good with advanced tools like databases and cloud technology, which helps me create cutting-edge and innovative solutions. When I'm not in the zone, I like to explore new destinations for a hike, game, or maybe try out a new recipe. I'm always eager to take on new challenges and grow both professionally and personally.",
		// "As a software engineer, I strive to deliver software solutions that are efficient, scalable, and reliable. I am enthusiastic about embracing new challenges and technologies. When I'm not writing code, I enjoy keeping up with the latest advances in AI. I am skilled in working with cutting-edge tools, from databases to the cloud, to drive innovation. When I'm not working, I like to hike, game, and explore new places. I am constantly seeking new challenges to improve my skills as an individual.",
	},

	about: {
		title: "About me",
		description:
			"Software Engineer with experience delivering efficient, scalable & reliable software solutions. Seeking opportunities as a dev/engineer in fields like Software Development, Automation, AI, and related areas.\n Leadership and team-building qualities.\n Good grasping skills and eagerness to learn new technologies.\n Excellent communication, presentation and interpersonal skills.\n Creative and innovative perspective.\n Flexible, reliable and helpful.\n Fast Learner, efficient and dedicated.",
		resume: "../Walstan_Baptista_resume.pdf",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: {
		title: "Projects I've worked on that you might find interesting",
		description:
			"Throughout my journey as a developer, I've taken on numerous projects, each of which has contributed to my growth and expertise. What's even more exciting is that a substantial portion of my projects are open-source, providing an excellent opportunity for collaboration and knowledge sharing. I'd be delighted if you could check out these projects and explore the codebase providing your insights and suggestions. I'm always up for a challenge, so if you have a project you want to bring to life, let's make it happen! ",
		project_list: [
			{
				title: "Impact of field-of-view on Monocular Visual SLAM accuracy.",
				description:
					"Investigated the impact of camera resolution and field of view on MonoSLAM's precision, providing recommendations for optimal selection in various applications.",
				image: "https://galeetch.com/images/portfolio/perception_gif.gif",
				image_alt: "drone flight simulation",
				skills: [
					"python",
					"ros",
					"opencv",
					"docker",
					"linux",
					"cplusplus",
				],
				linkText: "View Project",
				link: "https://github.com/walstanb/orbslam3_fov/blob/main/Report/Perception_Report.pdf",
			},
			{
				title: "Disturbance Observer-based Attitude Control of Quadrotor Drones",
				description:
					"This project stabilizes quadrotor drone control by implementing a disturbance observer-based controller. It detects and addresses uncertainties during flight, improving performance in turbulent conditions and motion control accuracy.",
				image: "https://raw.githubusercontent.com/walstanb/QuadDOB-control/main/simulation.gif",
				image_alt: "siumlation-demo",
				skills: ["matlab", "simulink"],
				linkText: "View Project",
				link: "https://github.com/walstanb/QuadDOB-control",
			},
			{
				title: "Webchat app",
				description:
					"This is a chat application built with React as the frontend and Python FastAPI as the backend. It allows users to communicate in real-time using a chat interface.",
				image: "https://raw.githubusercontent.com/walstanb/Webchat/main/demo/ui-demo.gif",
				image_alt: "webchat-demo",
				skills: [
					"react",
					"python",
					"javascript",
					"mongodb",
					"docker",
					"kubernetes",
				],
				linkText: "View Project",
				link: "https://github.com/walstanb/Webchat",
			},
			{
				title: "Bidirectional Search",
				description:
					"We implemented the 'Meet in Middle' (MM) algorithm on the Pacman search environment defined in “UC Berkeley Pacman AI Projects” developed by the DeNero, J.; et al.",
				image: "https://github.com/walstanb/bidirectional-search/raw/main/demo.gif",
				image_alt: "bidirectional search demo",
				skills: ["python", "git"],
				linkText: "View Project",
				link: "https://github.com/walstanb/bidirectional-search",
			},

			{
				title: "Shravas: Drone Automated Delivery System",
				description:
					"Shravas is a project aiming to revolutionize last-mile delivery using quadcopters. It offers speedy and accurate deliveries within cities, overcoming traffic delays and restrictions.",
				image: "https://github.com/walstanb/shravas/blob/master/demo/sim-video-gif.gif?raw=true",
				image_alt: "sim-demo",
				skills: ["python", "ros", "cplusplus", "django", "mysql"],
				linkText: "View Project",
				link: "https://github.com/walstanb/shravas",
			},

			{
				title: "Proximal Training for GAN",
				description:
					"PyTorch implementation of WGAN, that uses Wasserstein distance instead of JS divergence to measure the similarity between the generated and real data distributions.",
				image: "https://github.com/shivamsharma00/wgan/blob/master/gan_gif.gif?raw=true",
				image_alt: "sim-demo",
				skills: ["python", "pytorch", "opencv"],
				linkText: "View Project",
				link: "https://github.com/shivamsharma00/wgan/blob/master/report_gt.pdf",
			},
		],
	},

	experience: [
		{
			company_logo:
				"https://media.licdn.com/dms/image/C560BAQHDGjY1IZJuog/company-logo_200_200/0/1519855922217?e=1698278400&v=beta&t=coxQ6Ku_UH2CY3xU2x7_mWze0GjSTByaO2HEltz_raw",
			company: "Arizona State University",
			roles: [
				{
					role: "Graduate Research Assistant",
					duration: "Dec 2022 - Present",
					description:
						"Software tools for formal verification.\nRobustness analysis for python-based Psy-TaLiRo.\nSetup scalable Archcomp automation solution.",
				},
				{
					role: "Application Developer",
					duration: "May 2022 - Aug 2022",
					description:
						"Redesigned SCAD web app with team.\nIntegrated Stripe for secure transactions.\nDeveloped automated dispatch system with Celery.\nImplemented real-time location tracking with Flask-SocketIO.",
				},
			],
		},
		{
			company_logo:
				"https://media.licdn.com/dms/image/C510BAQHO3DgvC3ezeg/company-logo_200_200/0/1559448636267?e=1698278400&v=beta&t=DfWmw7oogu0SHBiW4XDiCdL3F5urdy7iMlyaXnJYKCM",
			company: "Resilient Tech",
			roles: [
				{
					role: "Full Stack Software Engineer",
					duration: "Oct 2020 - Aug 2021",
					description:
						"Contributed 60+ GitHub PRs, fixing 80+ issues.\nIntegrated Frappe ERPNext with 15+ systems.\nLed 3-member team, migrated apps to AWS/GCP.\nImproved scalability, decreased downtime by 10%.\nCommunicated with clients, provided status updates.",
				},
				{
					role: "Software Engineer Intern",
					duration: "May 2020 - Oct 2020",
					description:
						"Built 25+ forms, reports, and dashboards creatively.\nIntegrated Frappe with HTML, CSS, JavaScript seamlessly.\nAutomated processes, enhanced data accessibility, decision-making.",
				},
			],
		},
	],
};

export default INFO;