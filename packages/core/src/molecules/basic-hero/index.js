import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	mainFeaturedPost: {
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing.unit * 4
	},
	mainFeaturedPostContent: {
		padding: `${theme.spacing.unit * 6}px`,
		[theme.breakpoints.up('md')]: {
			paddingRight: 0
		}
	}
});

const BasicHero = ({ classes, rootStyle }) => {
	return (
		<Paper className={classes.mainFeaturedPost} square>
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography
							component="h1"
							variant="h3"
							color="inherit"
							gutterBottom
						>
							Title of a longer featured blog post
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							Multiple lines of text that form the lede, informing new readers
							quickly and efficiently about what&apos;s most interesting in this
							post&apos;s contents…
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
};

BasicHero.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BasicHero);
