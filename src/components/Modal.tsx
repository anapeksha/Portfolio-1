import CloseIcon from "@mui/icons-material/Close";
import {
	AppBar,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { theme } from "../lib/Constants";

const Modal = (props: any) => {
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClose = () => {
		props.setOpen(false);
	};
	const prettyTime = (time: string) => {
		var index = time.indexOf("T");
		var pretty = time.slice(0, index);
		return pretty;
	};
	return (
		<Dialog fullScreen={fullScreen} open={props.open} onClose={handleClose}>
			{fullScreen && (
				<AppBar sx={{ position: "relative" }} color="secondary">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="close"
							size="small"
							onClick={handleClose}
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			)}
			<DialogTitle>{props.heading}</DialogTitle>
			<DialogContent>
				<Typography variant="caption">
					{prettyTime(props.modified as string)}, Updated
				</Typography>
				<DialogContentText>{props.body}</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
