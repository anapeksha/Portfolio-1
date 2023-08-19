import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
	BottomNavigation,
	BottomNavigationAction,
	styled,
} from "@mui/material";
import React from "react";

const Footer = () => {
	const CustomBottomNavigationAction = styled(BottomNavigationAction)({
		"&:hover": {
			transform: "scale(1.2)",
			color: "#ce93d8",
		},
	});
	return (
		<BottomNavigation
			onChange={(event: React.SyntheticEvent, value) => {
				window.open(value);
			}}
			showLabels
			sx={{ width: "100%", position: "fixed", bottom: 0 }}
		>
			<CustomBottomNavigationAction
				label="LinkedIn"
				icon={<LinkedInIcon />}
				value="https://www.linkedin.com/in/soumiliroy"
			/>
			<CustomBottomNavigationAction
				label="Pinterest"
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
