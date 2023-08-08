import { styled, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Blockquote = styled(Box)({
	fontStyle: "italic",
	color: grey[100],
	borderLeft: `5px solid ${grey["A200"]}`,
});

export default Blockquote;
