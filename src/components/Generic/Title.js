import React, { memo } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	icon: {
		color: theme.palette.text.primary,
	},
}));

const Title = ({ icon, text }) => {
	const IconTag = icon;
	const classes = useStyles();

	return (
		<Box display="flex" alignItems="center" mt={6} mb={3}>
			{icon && (
				<IconTag
					style={{ marginRight: '.5rem', position: 'relative', top: '-1' }}
					className={classes.icon}
				/>
			)}
			<Typography
				variant="subtitle1"
				style={{ fontWeight: 500, fontSize: '1.1em' }}
				color="textPrimary"
			>
				{text}
			</Typography>
		</Box>
	);
};

export default memo(Title);
