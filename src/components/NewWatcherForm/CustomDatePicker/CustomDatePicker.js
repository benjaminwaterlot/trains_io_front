import React, { memo } from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

const CustomDatePicker = ({ placeholder, value, onChange }) => {
	return (
		<KeyboardDateTimePicker
			format="dd/MM HH:mm"
			ampm={false}
			value={value}
			onChange={onChange}
			disablePast
			hideTabs
			inputVariant="standard"
			style={{
				width: '100%',
			}}
			minutesStep={5}
			margin="normal"
		/>
	);
};

export default memo(CustomDatePicker);
