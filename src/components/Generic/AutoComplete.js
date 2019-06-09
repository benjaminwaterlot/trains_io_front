import React, { useState } from 'react';
import got from 'got';

import AsyncSelect from 'react-select/async';

const refineCity = city => {
	const firstParen = city.indexOf('(');
	if (firstParen === -1) return city;

	return city.slice(0, firstParen - 1);
};

const endpoint = input =>
	`https://booking.oui.sncf/booking/autocomplete-d2d?uc=fr-FR&searchField=origin&searchTerm=${input}`;

const getCities = async input => {
	if (input.length < 3) return [];

	const response = await got(endpoint(input));
	const result = JSON.parse(response.body);
	console.log(result);

	const refined = result
		.filter(({ id }) => !['FRORL', 'FRVLN'].includes(id)) // Remove bugged cities.
		.map(({ id, label }) => ({ value: id, label: refineCity(label) }));

	console.log(refined);
	return refined;
};

const AutoComplete = () => {
	const [value, setValue] = useState('');

	const handleChange = e => {
		setValue(e);
	};

	return (
		<AsyncSelect
			loadOptions={getCities}
			inputValue={value}
			onInputChange={handleChange}
		/>
	);
};

export default AutoComplete;
