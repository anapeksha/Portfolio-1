import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

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
				icon={<PinterestIcon />}
				value="https://in.pinterest.com/sohavoc"
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
