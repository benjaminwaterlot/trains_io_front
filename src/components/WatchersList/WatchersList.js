import React, { memo, useContext, useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { FirebaseContext } from '../../firebase';

const WatchersList = ({ lastWatcher }) => {
	const { watchers } = useContext(FirebaseContext);

	const [activeWatchers, setActiveWatchers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await watchers.orderBy('createdAt').get();
			const docs = data.docs.map(doc => doc.data());

			console.log(docs);
			setActiveWatchers(docs);
		};
		fetchData();
	}, [watchers, lastWatcher]);

	return (
		<Box my={2}>
			<Typography variant="subtitle1" style={{ fontWeight: 500 }}>
				Active watchers
			</Typography>
			{activeWatchers.map((watcher, index) => (
				<Box key={index}>
					<Typography>{watcher.day}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default memo(WatchersList);
