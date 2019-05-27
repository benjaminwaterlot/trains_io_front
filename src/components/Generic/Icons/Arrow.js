import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	arrow: {
		fill: theme.palette.text.secondary,
		// fill: 'red',
	},
}));

const Arrow = () => {
	const classes = useStyles();

	return (
		<svg
			width="50"
			height="16"
			viewBox="0 0 50 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.arrow}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M45.799 9L0 9L1.19209e-07 7L45.6568 7L40.3639 1.70712L41.7782 0.292908L48.8492 7.36398C49.2397 7.7545 49.2397 8.38766 48.8492 8.77819L41.7782 15.8493L40.3639 14.435L45.799 9Z"
				// fill="#A9AEB8"
			/>
		</svg>
	);
};

export default memo(Arrow);
