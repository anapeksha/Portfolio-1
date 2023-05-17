import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const Blockquote = styled("div")({
	fontStyle: "italic",
	color: grey[300],
	borderLeft: `3px solid ${grey["A100"]}`,
});

export default Blockquote;
