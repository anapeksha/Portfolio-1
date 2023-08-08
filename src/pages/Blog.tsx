import {
	documentToReactComponents,
	Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Divider, Grid, Link, Skeleton, Typography } from "@mui/material";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import Blockquote from "../components/Blockquote";
import BlogCard from "../components/BlogCard";
import Modal from "../components/Modal";
import { contentfulConfig } from "../lib/Constants";

const Blog = () => {
	const [blogs, setBlogs] = useState<any>();
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState<any>();
	const [hasImage, setHasImage] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);
	const client = createClient({
		accessToken: contentfulConfig.CONTENTFUL_TOKEN as string,
		space: contentfulConfig.CONTENTFUL_SPACE as string,
	});
	useEffect(() => {
		setLoading(true);
		client.getEntries().then((res) => {
			setLoading(false);
			setBlogs(res.items);
			console.log(res.items);
		});
	}, []);

	const options: Options = {
		renderNode: {
			[INLINES.HYPERLINK]: (node, children) => {
				return (
					<Link target="_blank" href={node.data.uri} underline="hover">
						{children}
					</Link>
				);
			},
			[BLOCKS.HEADING_1]: (node, children) => {
				return <Typography variant="h1">{children}</Typography>;
			},
			[BLOCKS.HEADING_2]: (node, children) => {
				return <Typography variant="h2">{children}</Typography>;
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				return <Typography variant="h3">{children}</Typography>;
			},
			[BLOCKS.HEADING_4]: (node, children) => {
				return <Typography variant="h4">{children}</Typography>;
			},
			[BLOCKS.HEADING_5]: (node, children) => {
				return <Typography variant="h5">{children}</Typography>;
			},
			[BLOCKS.HEADING_6]: (node, children) => {
				return <Typography variant="h6">{children}</Typography>;
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <Typography variant="body1" gutterBottom>{children}</Typography>;
			},
			[BLOCKS.HR]: (node, children) => {
				return <Divider />;
			},
			[BLOCKS.QUOTE]: (node, children) => {
				return <Blockquote><Typography paragraph variant="body2" style={{ marginLeft: "5px" }}>{children}</Typography></Blockquote>;
			},
		},
	};

	return (
		<Grid container spacing={4}>
			{loading
				? [...Array(20)].map((x, i) => {
					return (
						<Grid xs={6} md={3} xl={2} item key={i}>
							<Skeleton
								variant="rectangular"
								animation="pulse"
								height={150}
							/>
						</Grid>
					);
				})
				: blogs &&
				blogs.map((blog: any, index: any) => {
					return (
						<Grid xs={6} md={3} xl={2} item key={index}>
							<BlogCard
								heading={blog.fields.heading}
								description={blog.fields.description}
								handleOpen={() => {
									setOpen(true);
									setModalData(blog);
								}}
							/>
						</Grid>
					);
				})}
			{modalData && (
				<Modal
					open={open}
					setOpen={setOpen}
					heading={modalData.fields.heading}
					modified={modalData.sys.updatedAt}
					body={documentToReactComponents(modalData.fields.body, options)}
				/>
			)}
		</Grid>
	);
};

export default Blog;
