import React, { memo, useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress } from '@material-ui/core';

import { FirebaseContext } from '../../firebase';

const Home = props => {
	const Firebase = useContext(FirebaseContext);
	const [loading, setLoading] = useState(false);

	const handleList = async () => {
		setLoading(true);

		const query = await Firebase.db.collection('watchers').get();
		const docs = query.docs.map(doc => doc.data());

		docs.forEach(doc => console.log(doc));

		setLoading(false);
	};

	const handleAdd = async () => {
		const newDoc = await Firebase.db
			.collection('watchers')
			.add({ surName: 'Benjamin', lastName: 'Waterlot' });

		console.log(newDoc);
	};

	const handleClear = async () => {
		const docs = await Firebase.db
			.collection('watchers')
			.where('surName', '==', 'Benjamin')
			.get();

		docs.forEach(async doc => await doc.ref.delete());
		console.log('Removed all docs.');
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center" my={5}>
			<Box display="flex" justifyContent="center">
				<Box m={2}>
					<Button variant="outlined" color="primary" onClick={handleList}>
						Get users
					</Button>
				</Box>
				<Box m={2}>
					<Button variant="outlined" color="secondary" onClick={handleAdd}>
						Add user
					</Button>
				</Box>
				<Box m={2}>
					<Button variant="text" color="secondary" onClick={handleClear}>
						Remove users
					</Button>
				</Box>
			</Box>
			<Box m={3}>{loading ? <CircularProgress /> : null}</Box>
		</Box>
	);
};

export default memo(Home);
