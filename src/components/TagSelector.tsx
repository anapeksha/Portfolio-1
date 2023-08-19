import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

const TagSelector = (props: any) => {
	const handleChange = (event: SelectChangeEvent) => {
		props.setTagValue(event.target.value);
	};
	return (
		<FormControl sx={{ minWidth: 125, textAlign: "left" }}>
			<InputLabel color="secondary">Categories</InputLabel>
			<Select
				label="Categories"
				onChange={handleChange}
				color="secondary"
				autoWidth
			>
				<MenuItem value="all">All</MenuItem>
				{props.tags &&
					props.tags.map((tag: any, index: number) => {
						return (
							<MenuItem value={tag.sys.id} key={index}>
								{tag.name}
							</MenuItem>
						);
					})}
			</Select>
		</FormControl>
	);
};

export default TagSelector;
