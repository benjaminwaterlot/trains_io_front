import React, { useContext, useState, memo } from 'react';

import { Box, Button, CircularProgress, Grow } from '@material-ui/core';
import NewWatcherForm from '../NewWatcherForm/NewWatcherForm';

import { FirebaseContext } from '../../firebase';
import WatchersList from '../WatchersList/WatchersList';

const Home = () => {
	const { watchers } = useContext(FirebaseContext);

	const [loading, setLoading] = useState(false);
	const [lastWatcher, setLastWatcher] = useState({});

	const handleList = async () => {
		setLoading(true);

		const query = await watchers.get();
		const docs = query.docs.map(doc => doc.data());

		docs.forEach(doc => console.log(doc));

		setLoading(false);
	};

	const handleClear = async () => {
		const docs = await watchers.get();

		docs.forEach(async doc => await doc.ref.delete());
		console.log('Removed all docs.');
	};

	const handleNewWatcher = () => {
		setLastWatcher({});
	};

	return (
		<React.Fragment>
			<Box display="flex" flexDirection="column" alignItems="center" my={5}>
				<Box display="flex" justifyContent="center">
					<Box m={2}>
						<Button variant="outlined" color="primary" onClick={handleList}>
							Get users
						</Button>
					</Box>
					<Box m={2}>
						<Button variant="text" color="secondary" onClick={handleClear}>
							Remove users
						</Button>
					</Box>
				</Box>
				<Grow in={loading}>
					<Box>
						<CircularProgress />
					</Box>
				</Grow>
			</Box>
			<WatchersList lastWatcher={lastWatcher} />
			<NewWatcherForm addedWatcher={handleNewWatcher} />
		</React.Fragment>
	);
};

export default memo(Home);
