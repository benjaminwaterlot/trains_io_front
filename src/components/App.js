import React from 'react';
import Header from './Header/Header';
import { Container, createMuiTheme, Box } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import colors from '../colors';
import Home from './Home/Home';

const theme = createMuiTheme({
	palette: {
		primary: { main: colors.blue },
		secondary: { main: colors.pink },
		textPrimary: { main: colors.darkGrey },
		textSecondary: { main: colors.mediumGrey },
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
					<Home />
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default App;
