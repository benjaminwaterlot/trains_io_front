import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';
import DateFnsUtils from '@date-io/date-fns';

import Firebase, { FirebaseContext } from './firebase';

class LocalizedUtils extends DateFnsUtils {
	getDatePickerHeaderText(date) {
		return format(date, 'd MMM yyyy', { locale: this.locale });
	}
}

ReactDOM.render(
	<MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
		<FirebaseContext.Provider value={new Firebase()}>
			<App />
		</FirebaseContext.Provider>
	</MuiPickersUtilsProvider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
