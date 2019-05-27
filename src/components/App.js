import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Container, createMuiTheme, Box } from '@material-ui/core';

import colors from '../colors';

import Header from './Header/Header';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';

const theme = createMuiTheme({
	palette: {
		primary: { main: colors.primary },
		secondary: { main: colors.secondary },
		text: {
			primary: colors.darkGrey,
			secondary: colors.mediumGrey,
		},
		// textPrimary: { main: colors.darkGrey },
		// textSecondary: { main: colors.mediumGrey },
	},
});

const useStyles = makeStyles(theme => ({
	root: {},
	box: {
		boxShadow: `0px 2px 20px ${colors.mediumGrey}22`,
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container className={`App ${classes.root}`} maxWidth="lg">
				<Box
					bgcolor="white"
					borderRadius={15}
					p={3}
					m={3}
					className={classes.box}
					minHeight={500}
				>
					<Header />
					<Carousel />
					<Home />
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default App;
