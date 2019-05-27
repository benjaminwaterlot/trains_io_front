import React, { memo } from 'react';
import { Grow, Box, CircularProgress } from '@material-ui/core';

const Loader = props => (
	<Grow in={props.in}>
		<Box m={3} display="flex" justifyContent="center">
			<CircularProgress color="secondary" />
		</Box>
	</Grow>
);
export default memo(Loader);
