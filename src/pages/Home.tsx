import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import profilePicture from "../assets/img-profile.jpeg";
import {
	callToAction,
	heading1,
	heading2,
	intro,
	servicesOffered,
	whyChooseMe,
} from "../lib/Constants";

const Home = () => {
	const items = whyChooseMe.map((item, index) => {
		return (
			<Box sx={{ margin: "20px" }}>
				<Card sx={{ width: "250" }}>
					<CardMedia
						component="img"
						width="180"
						height="345"
						image={item.src}
						alt={item.alt}
					/>
					<CardContent>
						<Typography
							sx={{
								overflow: "hidden",
								textOverflow: "ellipsis",
								display: "-webkit-box",
								WebkitLineClamp: "1",
								WebkitBoxOrient: "vertical",
							}}
						>
							{item.body}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		);
	});
	const responsive = {
		0: {
			items: 1,
		},
		512: {
			items: 2,
		},
		1024: {
			items: 4,
		},
	};
	const handleDragStart = (e: React.DragEvent) => e.preventDefault();

	return (
		<Box>
			<Grid container spacing={4}>
				<Grid xs={12} item>
					<Card style={{ display: "flex", justifyContent: "center" }}>
						<CardContent>
							<Stack
								direction={{ xs: "column", md: "row" }}
								divider={<Divider orientation="vertical" flexItem />}
								spacing={2}
							>
								<Avatar
									alt="Soumili Roy"
									src={profilePicture}
									variant="rounded"
									sx={{
										width: { xs: 350, md: 500 },
										height: { xs: 350, md: 500 },
									}}
								/>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="h3"
										fontFamily="Merriweather, serif"
										fontWeight={700}
										fontStyle="bold"
									>
										{heading1}
									</Typography>
									<Typography
										variant="h5"
										gutterBottom
										fontFamily="Merriweather, serif"
										fontWeight={700}
										fontStyle="italic"
									>
										{heading2}
									</Typography>
									<Typography
										variant="body1"
										gutterBottom
										fontFamily="Merriweather, serif"
										fontWeight={400}
									>
										{intro}
									</Typography>
									<Typography variant="body1" fontWeight={900} fontSize={17}>
										{callToAction}
									</Typography>
								</Box>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} item>
					<Typography variant="h5">Services offered</Typography>
				</Grid>
				{servicesOffered.map((item, index) => {
					return (
						<Grid xs={6} md={3} xl={2} key={index} item>
							<Card style={{ overflowX: "auto" }}>
								<CardContent>
									<Typography>{item}</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
				<Grid xs={12} item>
					<Typography variant="h5">Why choose me?</Typography>
				</Grid>
				<AliceCarousel
					mouseTracking
					infinite
					disableDotsControls
					disableButtonsControls
					responsive={responsive}
					items={items}
					autoPlay
				/>
			</Grid>
		</Box>
	);
};

export default Home;
