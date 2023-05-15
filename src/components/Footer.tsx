import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	return (
		<BottomNavigation
			onChange={(event: React.SyntheticEvent, value) => {
				window.open(value);
			}}
			showLabels
		>
			<BottomNavigationAction
				label="LinkedIn"
				icon={<LinkedInIcon />}
				value="https://www.linkedin.com/in/soumiliroy"
			/>
			<BottomNavigationAction
				label="Instagram"
				icon={<InstagramIcon />}
				value="https://instagram.com/sohaa.struck"
				onClick={() => console.log("hello")}
			/>
			<BottomNavigationAction
				label="Email"
				icon={<EmailIcon />}
				value="mailto:soumili.roy.work@gmail.com"
			/>
		</BottomNavigation>
	);
};

export default Footer;
