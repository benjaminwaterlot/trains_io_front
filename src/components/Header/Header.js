import React, { memo } from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	root: {
		fontSize: '1.2rem',
		fontWeight: 500,
	},
	sub: {
		color: theme.palette.textSecondary.main,
		fontWeight: 300,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h1" className={classes.root}>
				Trains
				<span className={classes.sub}>.io</span>
			</Typography>
		</Box>
	);
};

export default memo(Header);
