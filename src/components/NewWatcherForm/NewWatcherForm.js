import React, { memo, useState, useContext } from 'react';
import {
	Box,
	Typography,
	TextField,
	Grid,
	Button,
	CircularProgress,
	Grow,
} from '@material-ui/core';
import { FirebaseContext } from '../../firebase';

const startFields = [
	{
		id: 'start',
		placeholder: 'Ville de départ',
	},
	{
		id: 'end',
		placeholder: "Ville d'arrivée",
	},
];

const NewWatcherForm = ({ addedWatcher }) => {
	const { watchers } = useContext(FirebaseContext);

	const defaultState = { start: '', end: '', day: '2019-01-02' };

	const [fields, setFields] = useState(defaultState);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);

		await watchers.add({ ...fields, createdAt: Date.now() });

		setFields(defaultState);
		setLoading(false);

		addedWatcher();
	};

	return (
		<Box>
			<Typography variant="subtitle1" style={{ fontWeight: 500 }}>
				Add a watcher
			</Typography>
			<Grid container spacing={2} alignItems="center">
				{startFields.map(field => (
					<Grid item key={field.id} m={2}>
						<TextField
							label={field.placeholder}
							value={fields[field.id]}
							onChange={e =>
								setFields({ ...fields, [field.id]: e.target.value })
							}
							margin="normal"
							variant="outlined"
						/>
					</Grid>
				))}
				<Grid item>
					<TextField
						id="date"
						label="Jour du voyage"
						type="date"
						defaultValue={fields.day}
						onChange={e => setFields({ ...fields, day: e.target.value })}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
				<Grid item>
					<Button size="large" color="primary" onClick={handleSubmit}>
						Valider
					</Button>
				</Grid>
			</Grid>
			<Grow in={loading}>
				<Box m={3} display="flex" justifyContent="center">
					<CircularProgress color="secondary" />
				</Box>
			</Grow>
		</Box>
	);
};

export default memo(NewWatcherForm);
