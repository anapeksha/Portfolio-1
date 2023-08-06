import React from "react";
import { BottomNavigation, BottomNavigationAction, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	const CustomBottomNavigationAction = styled(BottomNavigationAction)({
		'&:hover':{
			transform: "scale(1.2)",
			color: "#ce93d8"
		}
	})
	return (
		<BottomNavigation
			onChange={(event: React.SyntheticEvent, value) => {
				window.open(value);
			}}
			showLabels
		>
			<CustomBottomNavigationAction
				label="LinkedIn"
				icon={<LinkedInIcon />}
				value="https://www.linkedin.com/in/soumiliroy"
			/>
			<CustomBottomNavigationAction
				label="Instagram"
				icon={<InstagramIcon />}
				value="https://instagram.com/sohaa.struck"
				onClick={() => console.log("hello")}
			/>
			<CustomBottomNavigationAction
				label="Email"
				icon={<EmailIcon />}
				value="mailto:soumili.roy.work@gmail.com"
			/>
		</BottomNavigation>
	);
};

export default Footer;
