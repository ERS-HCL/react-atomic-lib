import React from 'react';
import { storiesOf } from '@storybook/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import BasicTheme from '../../themes/base-theme';
import ExampleComponent from '.';

storiesOf('atoms', module)
	.addDecorator(story => <MuiThemeProvider theme={BasicTheme}>{story()}</MuiThemeProvider>)
  .add('Example Component', () => (<ExampleComponent />));
