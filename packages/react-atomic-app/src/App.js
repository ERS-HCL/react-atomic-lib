import React from "react";
import logo from "./logo.svg";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BaseTheme, MoleculeComponent, AtomComponent } from "@react-atomic-lib/core";
/* import { MoleculeComponent } from "@react-atomic-lib/core/molecules";
import { AtomComponent } from "@react-atomic-lib/core/atoms"; */
import "./App.css";

function App() {
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

export default App;
