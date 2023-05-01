import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import React from "react";

interface ICard {
	heading: string;
	description: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogCard = (props: ICard) => {
	const handleOpen = () => {
		props.setOpen(true);
	};
	return (
		<Card
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{props.heading}
				</Typography>
				<Typography
					sx={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: "3",
						WebkitBoxOrient: "vertical",
					}}
					variant="body1"
				>
					{props.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={handleOpen}>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
};

export default BlogCard;
