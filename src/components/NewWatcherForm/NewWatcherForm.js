import React, { memo, useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../firebase';

import AddIcon from '@material-ui/icons/Add';
import { Box, TextField, Grid, Button } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

import Title from '../Generic/Title';
import Loader from '../Generic/Loader';

const startFields = [
	{
		id: 'from',
		placeholder: 'Ville de départ',
	},
	{
		id: 'to',
		placeholder: "Ville d'arrivée",
	},
];

const NewWatcherForm = ({ updateWatchers }) => {
	const { watchers } = useContext(FirebaseContext);

	const defaultDate = () => {
		const date = new Date();
		date.setHours(10, 0, 0, 0);
		return date;
	};
	const defaultState = {
		from: 'Chambéry',
		to: 'Paris',
		day: defaultDate(),
	};

	const [fields, setFields] = useState(defaultState);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log('rendered');
		console.log(fields);
	}, [updateWatchers]);

	const handleSubmit = async () => {
		setLoading(true);

		await watchers.add({ ...fields, createdAt: Date.now() });

		setFields(defaultState);
		setLoading(false);

		updateWatchers();
	};

	return (
		<Box>
			<Title icon={AddIcon} text="Ajouter un watcher" />
			<Box mx={2}>
				<Grid container spacing={4} alignItems="center">
					{startFields.map(field => (
						<Grid item key={field.id} m={2}>
							<TextField
								label={field.placeholder}
								value={fields[field.id]}
								onChange={e =>
									setFields({ ...fields, [field.id]: e.target.value })
								}
								margin="normal"
							/>
						</Grid>
					))}
					<Grid item>
						<KeyboardDateTimePicker
							format="dd/MM HH:mm"
							ampm={false}
							value={fields.day}
							onChange={e => setFields({ ...fields, day: e })}
							disablePast
							hideTabs
							inputVariant="standard"
							style={{ top: 11 }}
							minutesStep={5}
						/>
					</Grid>
					<Grid item>
						<Button
							size="large"
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							style={{ boxShadow: 'none', position: 'relative', top: 8 }}
						>
							Valider
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Loader in={loading} />
		</Box>
	);
};

export default memo(NewWatcherForm);
