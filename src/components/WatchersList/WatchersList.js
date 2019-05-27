import React, { memo, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../firebase';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box, Button } from '@material-ui/core';

import Title from '../Generic/Title';
import Loader from '../Generic/Loader';
import Watcher from './Watcher/Watcher';

const WatchersList = ({ updateList, updateWatchers }) => {
	const { watchers } = useContext(FirebaseContext);

	const [activeWatchers, setActiveWatchers] = useState([]);
	const [loading, setLoading] = useState(false);

	// Fetch the list of watchers on component update.
	useEffect(() => {
		(async () => {
			if (activeWatchers.length === 0) setLoading(true);

			const data = await watchers.orderBy('createdAt').get();
			const docs = data.docs.map(doc => doc.data());
			console.debug(docs);

			setTimeout(() => {
				setActiveWatchers(docs);
				setLoading(false);
			}, 500);
		})();
	}, [watchers, updateList]);

	const handleClear = async () => {
		setLoading(true);
		const all = await watchers.get();
		const allDeleted = all.docs.map(doc => doc.ref.delete());

		await Promise.all(allDeleted).catch(error => console.log(error));
		updateWatchers();
		setLoading(false);
		console.log('DONE !');
	};

	return (
		<Box my={2}>
			<Title icon={AutorenewIcon} text="Watchers actifs" />
			<Box mx={2}>
				{activeWatchers.map((watcher, index) => (
					<Watcher
						key={watcher.createdAt}
						day={watcher.day}
						from={watcher.from}
						to={watcher.to}
					/>
				))}
			</Box>
			{loading ? (
				<Loader in={loading} />
			) : (
				<Box my={5} mx={2}>
					{activeWatchers.length > 0 && (
						<Button variant="outlined" color="secondary" onClick={handleClear}>
							<Box display="inline-flex" mr={1}>
								<DeleteIcon />
							</Box>
							Tout supprimer
						</Button>
					)}
				</Box>
			)}
		</Box>
	);
};

export default memo(WatchersList);
