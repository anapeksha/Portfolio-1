import emailjs from "@emailjs/browser";
import {
	Alert,
	Button,
	Card,
	CardContent,
	Grid,
	MenuItem,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { connectFormData, emailJSConfig, servicesOffered } from "../lib/Constants";

const Connect = () => {
	const form = useRef<any>();
	const [success, setSuccess] = useState(false);
	const [open, setOpen] = useState(false);
	const [services, setServices] = useState<Array<string>>([]);

	const minAllowedTime = dayjs().set('hour', 11).startOf('hour');
	const maxAllowedTime = dayjs().set('hour', 18).endOf('hour');

	useEffect(() => {
		setTimeout(() => {
			setOpen(false);
		}, 3000);
		setSuccess(false);
	}, [success]);

	const submitForm = (event: any) => {
		event.preventDefault();
		console.log(form);
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
				console.log(result, form);
			})
			.catch((error: any) => {
				setSuccess(false);
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
			<Grid container item
				spacing={0}
				justifyContent="center"
				sx={{ minHeight: '70vh', marginTop: '7vh' }}>
				<Grid item xs={9}>
					<Card>
						<CardContent>
							<Typography variant="h4" gutterBottom>Let's talk!</Typography>
							<form ref={form} onSubmit={submitForm}>
								<Grid container spacing={1}>
									{connectFormData.map((data, index) => {
										if (data.name === "message") {
											return (
												<Grid item xs={12} key={index}>
													<TextField
														label={data.label}
														name={data.name}
														multiline
														rows={4}
														placeholder="Type your message here"
														variant="outlined"
														fullWidth
														required={data.required}
													/>
												</Grid>
											);
										}
										else if (data.name === "date-time") {
											return (
												<Grid xs={12} sm={6} item key={index}>
													<DateTimePicker
														disablePast
														formatDensity="spacious"
														minTime={minAllowedTime}
														slotProps={{
															textField: {
																name: data.name,
																type: data.type,
																label: data.label,
																required: data.required
															}
														}} sx={{ display: "flex" }} />
												</Grid>
											)
										}
										else if (data.name === "services") {
											return (
												<Grid xs={12} sm={6} item key={index}>
													<TextField
														select
														label={data.label}
														name={data.name}
														type={data.type}
														required={data.required}
														value={services}
														onChange={
															(event) => {
																setServices(
																	typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value)
															}
														}
														SelectProps={{
															multiple: true
														}}
														fullWidth
													>{
															servicesOffered.sort().map((option, optionIndex) => {
																return (
																	<MenuItem key={optionIndex} value={option}>
																		{option}
																	</MenuItem>
																)
															})
														}
													</TextField>
												</Grid>
											)
										}
										else {
											return (
												<Grid xs={12} sm={6} item key={index}>
													<TextField
														label={data.label}
														name={data.name}
														type={data.type}
														variant="outlined"
														fullWidth
														required={data.required}
													/>
												</Grid>
											);
										}
									})}

									<Grid item xs={12}>
										<Button
											type="submit"
											variant="contained"
											color="secondary"
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
			</Grid>
		</>
	);
};

export default Connect;
