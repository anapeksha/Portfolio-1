import {
	Avatar,
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import profilePicture from "../assets/profile-picture.png";
import { servicesOffered, whyChooseMe } from "../lib/Constants";

const Home = () => {
	return (
		<Box>
			<Typography variant="h3">Hi, I am Soumili Roy</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Your go-to freelance content writer and editor!
			</Typography>
			<Grid container spacing={4}>
				<Grid xs={12} item>
					<Card>
						<CardContent>
							<Stack
								direction="row"
								divider={<Divider orientation="vertical" flexItem />}
								spacing={2}
							>
								<Avatar
									alt="Soumili Roy"
									src={profilePicture}
									sx={{
										width: { xs: 125, sm: 100, md: 75 },
										height: { xs: 125, sm: 100, md: 75 },
									}}
								/>

								<Typography>
									As a Content Specialist with over 3 years of experience, I am
									passionate about crafting engaging and impactful content that
									resonates with audiences. With expertise in diverse niches
									including Finance, Education, Sports, iGames, News, Travel,
									IT, and more, I strive to create content that informs,
									inspires, and captivates readers. Name your expectations and
									you will have it!
								</Typography>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} item>
					<Typography variant="h5">Services offered</Typography>
				</Grid>
				{servicesOffered.map((item, index) => {
					return (
						<Grid xs={6} md={3} xl={2} item>
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
				<Grid xs={12} item>
					<Carousel autoPlay interval={3000} cycleNavigation animation="slide">
						{whyChooseMe.map((item, index) => {
							return (
								<Card>
									<CardContent>
										<Typography>{item}</Typography>
									</CardContent>
								</Card>
							);
						})}
					</Carousel>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
