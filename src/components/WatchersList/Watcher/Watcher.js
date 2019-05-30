import React, { memo } from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

import { Typography, Grid, Grow, Box } from '@material-ui/core';
import Arrow from '../../Generic/Icons/Arrow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const formatDateTime = dateToFormat => {
	const formatted = format(dateToFormat, "dd/MM HH'h'");
	const [date, time] = formatted.split(' ');

	return { date, time };
};

const Watcher = ({ start, end, from, to }) => {
	const startDT = formatDateTime(start.toDate());
	const endDT = formatDateTime(end.toDate());

	return (
		<Grow in={true}>
			<Grid container spacing={10} alignItems="center">
				<Grid item>
					<Box>
						<Typography variant="subtitle2" color="textPrimary">
							{startDT.date}
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
								{startDT.time}
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
							{endDT.date}
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
								{endDT.time}
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

Watcher.propTypes = {
	start: PropTypes.object,
	end: PropTypes.object,
	from: PropTypes.string,
	to: PropTypes.string,
};

export default memo(Watcher);
