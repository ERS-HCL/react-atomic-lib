import { addDecorator, configure } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
/**
 * @constant
 * @type {object}
 */
const req = require.context('../src', true, /.stories.(js|jsx)$/);
/**
 * @constant
 * @function
 */
const loadStories = () => {
	req.keys().forEach(req);
};

/**
 * @see https://github.com/storybooks/storybook/tree/master/addons/options#getting-started
 */
addDecorator(
	withBackgrounds([
		{ name: 'twitter', value: '#00aced' },
		{ name: 'facebook', value: '#3b5998' },
		{ default: true, name: 'white', value: '#fff' },
	]),
	withOptions({
		/**
		 * show addon panel as a vertical panel on the right.
		 * @type {boolean}
		 */
		addonPanelInRight: false,
		/**
		 * enable/disable shortcuts.
		 * @todo if true is the default, why don't we just remove this?
		 * @type {boolean}
		 */
		enableShortcuts: true, // true by default
		/**
		 * show story component as full screen.
		 * @type {boolean}
		 */
		goFullScreen: false,
		/**
		 * regex for finding the hierarchy root separator.
		 * @example:
		 *   null - turn off multiple hierarchy roots
		 *   /\|/ - split by `|`
		 * @type {?regex}
		 */
		hierarchyRootSeparator: null,
		/**
		 * regex for finding the hierarchy separator.
		 * @example:
		 *   null - turn off hierarchy
		 *   /\// - split by `/`
		 *   /\./ - split by `.`
		 *   /\/|\./ - split by `/` or `.`
		 * @type {?regex}
		 */
		hierarchySeparator: null,
		/**
		 * name to display in the top left corner.
		 * @type {string}
		 */
		name: 'Storybook',
		/**
		 * id to select an addon panel. The order of addons in the "Addon panel" is the same as you import them in
		 * 'addons.js'. The first panel will be opened by default as you run Storybook.
		 * @type {string}
		 */
		selectedAddonPanel: undefined,
		/**
		 * display panel that shows addon configurations.
		 * @type {boolean}
		 */
		showAddonPanel: true,
		/**
		 * display floating search box to search through stories.
		 * @type {boolean}
		 */
		showSearchBox: false,
		/**
		 * display panel that shows a list of stories.
		 * @type {boolean}
		 */
		showStoriesPanel: true,
		/**
		 * sidebar tree animations.
		 * @type {boolean}
		 */
		sidebarAnimations: true,
		/**
		 * sorts stories.
		 * @type {boolean}
		 */
		sortStoriesByKind: true,
		/**
		 * URL for name in top left corner to link to.
		 * @type {string}
		 */
		url: '#',
		/**
		 * @type {boolean}
		 */
		watch: true,
	})
);

addDecorator(withKnobs);

configure(loadStories, module);
