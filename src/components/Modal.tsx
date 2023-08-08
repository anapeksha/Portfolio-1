import CloseIcon from "@mui/icons-material/Close";
import {
	AppBar,
	Box,
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
				<AppBar sx={{ position: "relative", backgroundColor: "#ce93d8" }}>
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
			{!fullScreen ? (<DialogTitle style={{ backgroundColor: "#ce93d8", color: "black" }}>{props.heading}</DialogTitle>) : (<DialogTitle>{props.heading}</DialogTitle>)}
			<DialogContent>
           {props.image !== undefined ? (<Box component="img" src={props.image} alt={props.imageAlt} style={{ maxWidth: "100%", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }} />) : null}
				<Typography variant="caption" gutterBottom> 
					{prettyTime(props.modified as string)}, Updated
				</Typography>
				<DialogContentText>{props.body}</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
