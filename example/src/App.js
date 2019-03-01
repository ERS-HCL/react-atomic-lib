import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AtomComponent } from 'react-atomic-lib/atoms';
import { MoleculeComponent } from 'react-atomic-lib/molecules';
import { BaseTheme } from 'react-atomic-lib/themes';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<MuiThemeProvider theme={BaseTheme}>
					<AtomComponent />
					<MoleculeComponent />
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
