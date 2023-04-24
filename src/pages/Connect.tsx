import emailjs from "@emailjs/browser";
import {
	Alert,
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { emailJSConfig } from "../lib/Constants";

const Connect = () => {
	const form = useRef<any>();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setOpen(false);
			setError(false);
			setSuccess(false);
		}, 3000);
	}, [success, error]);
	const submitForm = (event: any) => {
		event.preventDefault();
		emailjs
			.sendForm(
				emailJSConfig.SERVICE_ID as string,
				emailJSConfig.TEMPLATE_ID as string,
				form.current,
				emailJSConfig.PUBLIC_KEY as string
			)
			.then((result: any) => {
				setSuccess(true);
				setOpen(true);
				console.log(result);
			})
			.catch((error: any) => {
				setError(false);
				setOpen(true);
				console.log(error);
			});
	};
	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				autoHideDuration={3000}
			>
				<Alert severity={!success ? "error" : "success"}>
					{!success ? "Something went wrong" : "Submitted successfully"}
				</Alert>
			</Snackbar>
			<Box>
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
			</Box>
		</>
	);
};

export default Connect;
