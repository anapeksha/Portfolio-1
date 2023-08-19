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
import TagSelector from "../components/TagSelector";
import { contentfulConfig } from "../lib/Constants";

const Blog = () => {
	const [blogs, setBlogs] = useState<any>();
	const [tags, setTags] = useState<any>();
	const [sortByTag, setSortByTag] = useState<string>("all");
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState<any>();
	const [loading, setLoading] = useState(false);

	const client = createClient({
		accessToken: contentfulConfig.CONTENTFUL_TOKEN as string,
		space: contentfulConfig.CONTENTFUL_SPACE as string,
	});

	useEffect(() => {
		setLoading(true);
		client.getTags().then((res) => {
			setTags(
				res.items.sort((element1, element2) => {
					if (element1.name < element2.name) return -1;
					else return 1;
				})
			);
		});
		client.getEntries().then((res) => {
			setLoading(false);
			setBlogs(res.items);
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
				return (
					<Typography variant="h1" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HEADING_2]: (node, children) => {
				return (
					<Typography variant="h2" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				return (
					<Typography variant="h3" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HEADING_4]: (node, children) => {
				return (
					<Typography variant="h4" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HEADING_5]: (node, children) => {
				return (
					<Typography variant="h5" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HEADING_6]: (node, children) => {
				return (
					<Typography variant="h6" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return (
					<Typography variant="body1" gutterBottom>
						{children}
					</Typography>
				);
			},
			[BLOCKS.HR]: (node, children) => {
				return <Divider />;
			},
			[BLOCKS.QUOTE]: (node, children) => {
				return (
					<Blockquote>
						<Typography paragraph variant="body2" style={{ marginLeft: "5px" }}>
							{children}
						</Typography>
					</Blockquote>
				);
			},
		},
	};

	return (
		<>
			<Divider
				textAlign="left"
				style={{ marginBottom: "2%" }}
				role="presentation"
			>
				<TagSelector setTagValue={setSortByTag} tags={tags} />
			</Divider>
			<Grid
				container
				spacing={4}
				sx={{ paddingBottom: { xs: "15%", md: "5%" } }}
			>
				{loading
					? [...Array(20)].map((x, i) => {
							return (
								<Grid xs={6} md={3} xl={2} item key={i}>
									<Skeleton
										variant="rectangular"
										animation="wave"
										height={150}
									/>
								</Grid>
							);
					  })
					: blogs &&
					  blogs.map((blog: any, index: any) => {
							if (
								sortByTag !== "all" &&
								blog.metadata.tags.find(
									(element: any) => element.sys.id === sortByTag
								)
							) {
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
							} else if (sortByTag === "all") {
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
							} else {
								return null;
							}
					  })}
				{modalData && (
					<Modal
						open={open}
						setOpen={setOpen}
						heading={modalData.fields.heading}
						modified={modalData.sys.updatedAt}
						created={modalData.sys.createdAt}
						body={documentToReactComponents(modalData.fields.body, options)}
						image={
							modalData.fields.bannerImage &&
							modalData.fields.bannerImage.fields.file.url
						}
					/>
				)}
			</Grid>
		</>
	);
};

export default Blog;
