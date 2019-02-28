module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!src/**/index.js',
		'!src/**/*.stories.{js,jsx}',
		'!**/node_modules/**',
		'!build/**',
	],
	coverageReporters: ['lcov', 'text'],
	reporters: [
		'default',
		// ["jest-junit", { suiteName: "jest tests" }]
	],
	setupFiles: ['./setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	verbose: true,
};
