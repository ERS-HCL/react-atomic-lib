import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import { MuiThemeProvider } from '@material-ui/core/styles';
import BasicTheme from '../../themes/base-theme';
import {
	createStoryBookSelect,
	createStoryBookBoolean
} from '../../utils/storybook-helper';
import BasicHero from '.';

storiesOf('molecules', module)
	.addDecorator((story) => (
		<MuiThemeProvider theme={BasicTheme}>{story()}</MuiThemeProvider>
	))
	.add('Basic Hero', () => {
		return <BasicHero />;
	});
