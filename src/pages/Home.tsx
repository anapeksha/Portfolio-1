import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
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
							<Typography>
								As a Content Specialist with over 3 years of experience, I am
								passionate about crafting engaging and impactful content that
								resonates with audiences. With expertise in diverse niches
								including Finance, Education, Sports, iGames, News, Travel, IT,
								and more, I strive to create content that informs, inspires, and
								captivates readers. Name your expectations and you will have it!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} item>
					<Typography variant="h5">Why choose me?</Typography>
				</Grid>
				{whyChooseMe.map((item, index) => {
					return (
						<Grid xs={12} item key={index}>
							<Card>
								<CardContent>
									<Typography>{item}</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
				<Grid xs={12} item>
					<Typography variant="h5">Services offered</Typography>
				</Grid>
				{servicesOffered.map((item, index) => {
					return (
						<Grid xs={4} md={3} xl={2} item>
							<Card>
								<CardContent>
									<Typography>{item}</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Home;
