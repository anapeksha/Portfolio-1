import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Grid } from "@mui/material";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Modal from "../components/Modal";
import { contentfulConfig } from "../lib/Constants";

const Blog = () => {
	const [blogs, setBlogs] = useState<any>();
	const [open, setOpen] = useState(false);
	const client = createClient({
		accessToken: contentfulConfig.CONTENTFUL_TOKEN as string,
		space: contentfulConfig.CONTENTFUL_SPACE as string,
	});

	useEffect(() => {
		client.getEntries().then((res) => {
			setBlogs(res.items);
			console.log(res.items);
		});
	}, []);

	return (
		<>
			<Grid container spacing={4}>
				{blogs &&
					blogs.map((blog: any, index: any) => {
						return (
							<>
								<Grid xs={6} md={3} xl={2} item key={index}>
									<BlogCard
										heading={blog.fields.heading}
										description={blog.fields.description}
										setOpen={setOpen}
									/>
								</Grid>
								<Modal
									open={open}
									setOpen={setOpen}
									heading={blog.fields.heading}
									modified={blog.sys.updatedAt}
									body={documentToReactComponents(blog.fields.body)}
								/>
							</>
						);
					})}
			</Grid>
		</>
	);
};

export default Blog;
