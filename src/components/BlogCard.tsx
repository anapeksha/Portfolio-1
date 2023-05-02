import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

interface ICard {
	heading: string;
	description: string;
	handleOpen: () => void;
}

const BlogCard = (props: ICard) => {
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
				<Typography
					sx={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: "2",
						WebkitBoxOrient: "vertical",
					}}
					gutterBottom
					variant="h5"
				>
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
				<Button size="small" onClick={props.handleOpen}>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
};

export default BlogCard;
