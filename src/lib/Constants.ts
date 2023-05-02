import { createTheme } from "@mui/material";

const navItems = [
	{ name: "Home", url: "/" },
	{ name: "Blog", url: "blog" },
	{ name: "Get In Touch", url: "get-in-touch" },
];
const drawerWidth = 240;

const whyChooseMe = [
	"Experience: With over 3 years of professional experience in the field of content creation, I have honed my skills in crafting high-quality and effective content that meets the needs of my clients and engages with their target audience.",
	"Expertise: My content expertise spans across various niches, including Finance, Education, Sports, iGames, Travel, IT, and more. I have a deep understanding of these subjects and can create content that is informative, engaging, and tailored to the specific needs of each niche.",
	"Creativity: I believe in the power of creativity to make content stand out. I strive to bring a fresh perspective and innovative ideas to every project, creating content that is unique, captivating, and memorable.",
	"Results-Driven: I am committed to delivering results through my content. Whether it's increasing website traffic, improving search engine rankings, or driving engagement on social media, I focus on creating content that achieves tangible outcomes for my clients.",
	"Content Creation: I specialize in creating high-quality and engaging content for websites, blogs, social media, and other platforms. From articles and blog posts to social media updates and product descriptions, I can craft content that resonates with your target audience and meets your specific goals.",
	"Content Strategy: I can help you develop a content strategy that aligns with your business objectives, target audience, and brand voice. From content planning and research to content calendar creation and content optimization, I can provide strategic  to ensure your content is effective and impactful.",
	"Content Editing and Proofreading: I offer editing and proofreading services to ensure that your content is error-free, grammatically correct, and well-polished. I can help you refine your content to make it professional, engaging, and audience-friendly.",
];

const intro =
	"As a Content Specialist with over 3 years of experience, I am passionate about crafting engaging and impactful content that resonates with audiences. With expertise in diverse niches including Finance, Education, Sports, iGames, News, Travel, IT, and more, I strive to create content that informs, inspires, and captivates readers. Name your expectations and you will have it!";

const heading1 = "Hi, I am Soumili Roy";

const heading2 = "Your go-to freelance content writer and editor!";

const servicesOffered = [
	"Content Creation",
	"Content Strategy",
	"Content Editing",
	"Copywriting",
	"Proofreading",
	"Landing Page",
	"Blog Writing",
	"Guest Posting",
	"Ghostwriting",
	"Guides",
	"Press Release",
	"SEO",
	"Editorial or Opinion",
	"Creative Writing",
	"Infographic Content",
	"Content Support",
	"Webpage Content",
	"Technical Writing",
];

const emailJSConfig = {
	SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
	TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
	PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const contentfulConfig = {
	CONTENTFUL_SPACE: process.env.REACT_APP_CONTENTFUL_SPACE,
	CONTENTFUL_TOKEN: process.env.REACT_APP_CONTENTFUL_TOKEN,
};

const theme = createTheme({
	palette: {
		mode: "light",
	},
});

const connectFormData = [
	{
		type: "text",
		label: "First Name",
		name: "first-name",
		required: true,
	},
	{
		type: "text",
		label: "Last Name",
		name: "last-name",
		required: true,
	},
	{
		type: "email",
		label: "Email",
		name: "email",
		required: true,
	},
	{
		type: "number",
		label: "Phone",
		name: "ph-no",
		required: false,
	},
	{
		type: "text",
		label: "Message",
		name: "message",
		required: true,
	},
];

export {
	navItems,
	drawerWidth,
	theme,
	whyChooseMe,
	servicesOffered,
	emailJSConfig,
	intro,
	heading1,
	heading2,
	connectFormData,
	contentfulConfig,
};
