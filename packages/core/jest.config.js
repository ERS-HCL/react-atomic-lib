module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!src/**/*.stories.{js,jsx}',
		'!**/node_modules/**',
		'!build/**',
		'!example/**',
	],
	coverageReporters: ['lcov', 'text'],
	reporters: [
		'default',
		// ["jest-junit", { suiteName: "jest tests" }]
	],
	setupFiles: ['./setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	verbose: true,
	testPathIgnorePatterns: ["example"]
};
