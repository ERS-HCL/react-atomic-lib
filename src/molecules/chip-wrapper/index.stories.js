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
import ChipWrapper from '.';

storiesOf('molecules', module)
	.addDecorator((story) => (
		<MuiThemeProvider theme={BasicTheme}>{story()}</MuiThemeProvider>
	))
	.add('chips', () => {
		const color = createStoryBookSelect(
			'Colors',
			{
				default: '',
				primary: 'primary',
				secondary: 'secondary'
			},
			''
		);

		const onDelete = createStoryBookSelect(
			'onDelete',
			{
				none: 'none',
				default: 'default',
				custom: 'custom'
			},
			'none'
		);

		const withIcon = createStoryBookSelect('Icon',{
			none: 'none',
			withIcon: 'with Icon'
		},'none');


		const variant = createStoryBookSelect('Variant',{
			default: 'default',
			outlined: 'outlined'
		},'default');

		const avatar = createStoryBookSelect('Avatar',{
			none: 'none',
			letter: 'letter',
			img: 'img',
			icon: 'icon'
		},'none');

		return (
			<ChipWrapper
				color={color}
				onDelete={onDelete}
				handleDelete={action('button-click')}
				icon={withIcon}
				avatar={avatar}
				variant={variant}
			/>
		);
	});
