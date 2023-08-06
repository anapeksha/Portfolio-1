import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

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
				icon={<PinterestIcon />}
				value="https://in.pinterest.com/sohavoc"
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
