import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo_icon.svg";
import { drawerWidth, navItems } from "../lib/Constants";

const Header = (props: any) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Logo height={60} width={60} />
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton
							sx={{ textAlign: "center" }}
							onClick={() => navigate(item.url)}
						>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<AppBar component="nav" color="secondary">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<Logo height={60} width={60} />
					</Box>

					<Box
						sx={{
							display: { xs: "none", sm: "flex" },
							justifyContent: "end",
							width: "100vw",
						}}
					>
						{navItems.map((item) => (
							<Button
								key={item.name}
								sx={{ color: "#fff" }}
								onClick={() => navigate(item.url)}
							>
								{item.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
};

export default Header;
