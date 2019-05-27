import React, { memo, useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../firebase';

import AddIcon from '@material-ui/icons/Add';
import { Box, TextField, Grid, Button } from '@material-ui/core';

import Title from '../Generic/Title';
import Loader from '../Generic/Loader';
import CustomDatePicker from './CustomDatePicker/CustomDatePicker';
import colors from '../../colors';

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
		const start = new Date();
		start.setHours(10, 0, 0, 0);

		const end = new Date();
		end.setHours(20, 0, 0, 0);

		return { start, end };
	};

	const defaultState = {
		from: '',
		to: '',
		start: defaultDate().start,
		end: defaultDate().end,
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
			<Box
				m="auto"
				maxWidth={600}
				bgcolor={`${colors.secondary}22`}
				p={4}
				borderRadius={10}
			>
				<Grid container spacing={6} alignItems="center" justify="center">
					{startFields.map(field => (
						<Grid item key={field.id} xs={6}>
							<TextField
								label={field.placeholder}
								value={fields[field.id]}
								onChange={e =>
									setFields({ ...fields, [field.id]: e.target.value })
								}
								margin="normal"
								style={{ width: '100%' }}
							/>
						</Grid>
					))}
					<Grid item xs={6}>
						<CustomDatePicker
							placeholder=""
							value={fields.start}
							onChange={e => setFields({ ...fields, start: e })}
						/>
					</Grid>
					<Grid item xs={6}>
						<CustomDatePicker
							placeholder=""
							value={fields.end}
							onChange={e => setFields({ ...fields, end: e })}
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
