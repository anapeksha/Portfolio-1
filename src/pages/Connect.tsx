import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";

const Connect = () => {
	return (
		<Grid
			style={{
				display: "flex",
				height: "100vh",
				width: "100vw",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card>
				<CardContent>
					<Typography gutterBottom>Contact Us</Typography>
					<form>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									label="First Name"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									label="Last Name"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="email"
									label="Email"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="number"
									label="Phone"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Message"
									multiline
									rows={4}
									placeholder="Type your message here"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Connect;
