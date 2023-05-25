import { createTheme } from "@mui/material";

const navItems = [
	{ name: "Home", url: "/" },
	{ name: "Blog", url: "blog" },
	{ name: "Get In Touch", url: "get-in-touch" },
];
const drawerWidth = 240;

const whyChooseMe = [
	{
		src: "https://images.unsplash.com/photo-1647529734753-c4748d7ee5f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Storytelling",
		alt: "man reading a book written, part one-How does storytelling work",
	},
	{
		src: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		body: "Business Branding",
		alt: "a pile of books",
	},
	{
		src: "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
		body: "Increased Engagement and Reach",
		alt: "a pile of books",
	},
	{
		src: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Originality",
		alt: "a pile of books",
	},
	{
		src: "https://images.unsplash.com/photo-1510861320402-285a6c7639ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80",
		body: "Quality-driven and Creative",
		alt: "a pile of books",
	},
	{
		src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
		body: "Strategic Brand Positioning",
		alt: "a pile of books",
	},
	{
		src: "https://images.unsplash.com/photo-1612367289790-67d076b32d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		body: "Business Vision Optimization",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
		body: "Client-Centric Collaboration",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1511405732889-ce3d6256f366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Conversion Rate Optimization",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Creative Brand Solutions",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Compelling Visual Storytelling",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1585190169793-06f75cf12946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		body: "Targeted Audience Engagement",
		alt: "a pile of bread",
	},
	{
		src: "https://images.unsplash.com/photo-1611328573097-a3cd1ae144a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
		body: "Increased Impression",
		alt: "a pile of bread",
	},
	{
		src: "https://images.pexels.com/photos/3727512/pexels-photo-3727512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		body: "Ahead-of-the-Game",
		alt: "a pile of bread",
	},
];

const intro =
	"At the intersection of art and narrative, lies the transformative power of storytelling. I am Soumili Roy, a Content Specialist with 4 years of experience, driven by the belief that words have the ability to shape perceptions, provoke emotions, and ignite change. With a passion for crafting captivating content, I have made it my mission to serve as a catalyst for brands, inspiring them to take decisive action. Creating content is more than weaving words together; it is an art form that holds the potential to propel brands to new heights. It is through the fusion of creativity, strategy, and purpose that I harness the true power of storytelling. Every brand has a unique story waiting to be told, and I am here to help unleash its full potential.";

const callToAction =
	"Are you ready to tell your story? Let's make it unforgettable.";

const heading1 = "Soumili Roy";

const heading2 = "Empowering Brands for a Better Tomorrow";

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
		mode: "dark",
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
	callToAction,
	heading1,
	heading2,
	connectFormData,
	contentfulConfig,
};
