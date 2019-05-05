import { text, boolean, number, object, select } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

const createStoryBookSelect = (label, options, defaultValue) => {
	const groupId = `GROUP-${label}`;
	return select(label, options, defaultValue, groupId);
};

const createStoryBookBoolean = (label, defaultValue) => {
	const groupId = `GROUP-${label}`;
	return boolean(label, defaultValue, groupId);
};

export { createStoryBookSelect, createStoryBookBoolean };
