import React, { memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		backgroundImage: 'url("./bg.jpg")',
		backgroundSize: 'cover',
	},
});

const Carousel = () => {
	const classes = useStyles();

	return <Box className={classes.root} mx={-3} my={3} height={'25vw'} />;
};

export default memo(Carousel);
