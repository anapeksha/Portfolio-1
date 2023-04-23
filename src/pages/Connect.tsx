import emailjs from "@emailjs/browser";
import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useRef } from "react";
import { emailJSConfig } from "../lib/Constants";

const Connect = () => {
	const form = useRef<any>();
	const submitForm = (event: any) => {
		event.preventDefault();
		emailjs
			.sendForm(
				emailJSConfig.SERVICE_ID,
				emailJSConfig.TEMPLATE_ID,
				form.current,
				emailJSConfig.PUBLIC_KEY
			)
			.then((result: any) => {
				console.log(result);
			})
			.catch((error: any) => {
				console.log(error);
			});
	};
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
					<form ref={form} onSubmit={submitForm}>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									label="First Name"
									name="first-name"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									label="Last Name"
									name="last-name"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="email"
									name="email"
									label="Email"
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="number"
									name="ph-no"
									label="Phone"
									variant="outlined"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Message"
									name="message"
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
