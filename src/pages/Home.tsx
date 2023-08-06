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
	styled,
} from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import Countup from "../components/Countup";
import "react-alice-carousel/lib/alice-carousel.css";
import profilePicture from "../assets/img-profile.jpeg";
import {
	callToAction,
	heading1,
	heading2,
	statistics3,
	heading4,
	intro_part1,
	intro_part2,
	intro_part3,
	servicesOffered,
	whyChooseMe,
} from "../lib/Constants";

const Home = () => {
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
	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) =>
		e.preventDefault();
	const CustomCard = styled(Card)({
		border: "2px solid #ce93d8"
	})
	const CustomImageCard = styled(Card)({
		'&:hover':{
			opacity: "0.5"
		}
	})
	const items = whyChooseMe.map((item, index) => {
		return (
			<Box sx={{ margin: "20px" }} onDragStart={handleDragStart}>
				<CustomImageCard sx={{ width: "250" }}>
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
				</CustomImageCard>
			</Box>
		);
	});

	return (
		<Box>
			<Grid container spacing={4}>
				<Grid xs={12} item>
					<CustomCard style={{ display: "flex", justifyContent: "center" }}>
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
									style={{
										display: "inline-block",
										margin: "0 0.5rem",
									}}
								/>
								<Box
									style={{
										display: "inline-block",
										margin: "0 0.5rem",
									}}
								>
									<Typography
										variant="h3"
										component="h1"
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
										{intro_part1}
									</Typography>
									<br/>
									<Typography
										variant="body1"
										gutterBottom
										fontFamily="Merriweather, serif"
										fontWeight={400}
									>
										{intro_part2}
									</Typography>
									<br/>
									{statistics3.map((value, index) => {
										return (
											<Typography
												variant="body1"
												gutterBottom
												fontFamily="Merriweather, serif"
												fontWeight={400}
												key={index}
											>
												{`- ${value}`}
											</Typography>
										)
									})}
									<br/>
									<Typography
										variant="body1"
										gutterBottom
										fontFamily="Merriweather, serif"
										fontWeight={400}
									>
										{heading4}
									</Typography>
									<Typography variant="body1" fontWeight={900} fontSize={17}>
										{callToAction}
									</Typography>
								</Box>
							</Stack>
						</CardContent>
					</CustomCard>
				</Grid>
				<Countup/>
				{/* <Grid xs={12} item>
					<Typography variant="h5">Services offered</Typography>
				</Grid>
				{servicesOffered.map((item, index) => {
					return (
						<Grid xs={6} md={3} xl={2} key={index} item>
							<Card>
								<CardContent>
									<Typography>{item}</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})} */}
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
