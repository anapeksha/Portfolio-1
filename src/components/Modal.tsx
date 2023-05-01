import CloseIcon from "@mui/icons-material/Close";
import {
	AppBar,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Toolbar,
	useMediaQuery,
} from "@mui/material";
import { theme } from "../lib/Constants";

const Modal = (props: any) => {
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClose = () => {
		props.setOpen(false);
	};
	return (
		<Dialog fullScreen={fullScreen} open={props.open} onClose={handleClose}>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="close"
						onClick={handleClose}
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<DialogTitle>{props.heading}</DialogTitle>
			<DialogContent>
				<DialogContentText>{props.body}</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
