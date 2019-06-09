import React, { memo, useState, useContext } from 'react';
import { FirebaseContext } from '../../firebase';
import faker from '../../utils/faker/faker';

import AddIcon from '@material-ui/icons/Add';
import { Box, TextField, Grid, Button } from '@material-ui/core';

import Title from '../Generic/Title';
import Loader from '../Generic/Loader';
import CustomDatePicker from './CustomDatePicker/CustomDatePicker';
import colors from '../../colors';

import AutoComplete from '../Generic/AutoComplete';

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

	const defaultState = () => {
		const startDate = faker.date.future(1 / 12);
		startDate.setHours(10, 0);

		const endDate = new Date(startDate);
		endDate.setHours(18, 0);

		return {
			from: faker.address.city(),
			to: faker.address.city(),
			start: startDate,
			end: endDate,
		};
	};

	const [fields, setFields] = useState(defaultState());
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);

		await watchers.add({ ...fields, createdAt: Date.now() });

		updateWatchers('UPDATE');
		setFields(defaultState);
		setLoading(false);
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
							<AutoComplete />
							{/* <TextField
								label={field.placeholder}
								value={fields[field.id]}
								onChange={e =>
									setFields({
										...fields,
										[field.id]: e.target.value,
									})
								}
								margin="normal"
								style={{ width: '100%' }}
							/> */}
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
							style={{
								boxShadow: 'none',
								position: 'relative',
								top: 8,
							}}
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
