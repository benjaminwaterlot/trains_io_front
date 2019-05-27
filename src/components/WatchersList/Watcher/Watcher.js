import React, { memo } from 'react';
import format from 'date-fns/format';

import { Typography, Grid, Grow, Box } from '@material-ui/core';
import Arrow from '../../Generic/Icons/Arrow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const formatDateTime = timestamp => {
	const formatted = format(timestamp, "dd/MM hh'h'");
	const [date, time] = formatted.split(' ');

	return { date, time };
};

const Watcher = ({ day, from, to }) => {
	const timestamp = new Date(day.seconds * 1000);
	const dateTime = formatDateTime(timestamp);

	return (
		<Grow in={true}>
			<Grid container spacing={10} alignItems="center">
				<Grid item>
					<Box>
						<Typography variant="subtitle2" color="textPrimary">
							{dateTime.date}
							<Typography
								variant="subtitle2"
								component="span"
								color="textSecondary"
								style={{
									fontWeight: 400,
									fontSize: '.9em',
									position: 'relative',
									left: 5,
								}}
							>
								{dateTime.time}
							</Typography>
						</Typography>
						<Typography
							variant="subtitle2"
							color="textPrimary"
							style={{
								position: 'relative',
								left: 2,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<KeyboardArrowRightIcon />
							{dateTime.date}
							<Typography
								variant="subtitle2"
								component="span"
								color="textSecondary"
								style={{
									fontWeight: 400,
									fontSize: '.9em',
									position: 'relative',
									left: 5,
								}}
							>
								{dateTime.time}
							</Typography>
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box display="flex" alignItems="center">
						<Typography variant="subtitle2" color="textPrimary">
							{from}
						</Typography>
						<Box mx={3} style={{ position: 'relative', top: 1 }}>
							<Arrow />
						</Box>
						<Typography variant="subtitle2" color="textPrimary">
							{to}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grow>
	);
};

export default memo(Watcher);
