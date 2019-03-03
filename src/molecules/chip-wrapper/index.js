import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	control: {
		padding: theme.spacing.unit * 2
	},
	chipWrapper: {
		marginBottom: theme.spacing.unit * 5
	},
	markDown: {
		backgroundColor: 'black'
	}
});

const ChipWrapper = ({
	classes,
	color,
	onDelete,
	avatar,
	icon,
	variant,
	handleDelete
}) => {
	const colorToCode = color !== 'default' ? `color="${color}" ` : '';
	const variantToCode = variant !== 'default' ? `variant="${variant}" ` : '';

	let onDeleteToCode;
	switch (onDelete) {
		case 'none':
			onDeleteToCode = '';
			break;
		case 'custom':
			onDeleteToCode = 'deleteIcon={<DoneIcon />} onDelete={handleDelete} ';
			break;
		default:
			onDeleteToCode = 'onDelete={handleDelete} ';
			break;
	}

	let iconToCode;
	let iconToPlayground;
	switch (icon) {
		case 'none':
			iconToCode = '';
			break;
		default:
			iconToCode = 'icon={<FaceIcon />} ';
			iconToPlayground = <FaceIcon />;
			break;
	}

	let avatarToCode;
	let avatarToPlayground;
	switch (avatar) {
		case 'none':
			avatarToCode = '';
			break;
		case 'img':
			avatarToCode =
				'avatar={<Avatar src="https://randomuser.me/api/portraits/thumb/men/63.jpg" />} ';
			avatarToPlayground = (
				<Avatar src="https://randomuser.me/api/portraits/thumb/men/63.jpg" />
			);
			break;
		case 'letter':
			avatarToCode = 'avatar={<Avatar>FH</Avatar>} ';
			avatarToPlayground = <Avatar>FH</Avatar>;
			break;
		default:
			avatarToCode = 'avatar={<Avatar><FaceIcon /></Avatar>} ';
			avatarToPlayground = (
				<Avatar>
					<FaceIcon />
				</Avatar>
			);
			break;
	}

	if (avatar !== 'none') {
		iconToCode = '';
		iconToPlayground = null;
	}

	const code = `
\`\`\`jsx
<Chip ${colorToCode}${onDeleteToCode}${avatarToCode}${iconToCode}${variantToCode}/>
\`\`\`
`;

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<Grid container justify="center" alignItems="center" spacing={40}>
					<Grid item className={classes.chipWrapper}>
						<Chip
							label="Awesome Chip Component"
							color={color}
							deleteIcon={onDelete === 'custom' ? <DoneIcon /> : undefined}
							onDelete={onDelete !== 'none' ? handleDelete : undefined}
							avatar={avatarToPlayground}
							icon={iconToPlayground}
							variant={variant}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<MarkdownElement text={code} className={classes.markDown} />
			</Grid>
		</Grid>
	);
};

ChipWrapper.propTypes = {
	classes: PropTypes.object.isRequired
};

ChipWrapper.defaultProps = {
	color: 'default',
	onDelete: 'none',
	avatar: 'none',
	icon: 'none',
	variant: 'default'
};
export default withStyles(styles)(ChipWrapper);
