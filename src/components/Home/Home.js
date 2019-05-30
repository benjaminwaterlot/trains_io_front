import React, { useState, memo } from 'react';

import NewWatcherForm from '../NewWatcherForm/NewWatcherForm';

import WatchersList from '../WatchersList/WatchersList';

const Home = () => {
	const [updateList, setUpdateList] = useState({ type: 'UPDATE' });

	const handleUpdate = option => {
		setUpdateList({ type: option });
	};

	return (
		<React.Fragment>
			<WatchersList updateList={updateList} updateWatchers={handleUpdate} />
			<NewWatcherForm updateWatchers={handleUpdate} />
		</React.Fragment>
	);
};

export default memo(Home);
