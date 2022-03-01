export const BUILD_TYPES = {
	PRODUCTION: "production",
	STAGE: "stage",
	DEBUG: "debug",
};

const buildTypeConfig = {
	debug: {
		BUILD_TYPE: BUILD_TYPES.DEBUG,
	},
	stage: {
		BUILD_TYPE: BUILD_TYPES.STAGE,
	},
};

const defaultConfig = {
	BUILD_TYPE: BUILD_TYPES.PRODUCTION,
	isProduction: () => process.env.REACT_APP_BUILD_TYPE === BUILD_TYPES.PRODUCTION,
};

export default { ...defaultConfig, ...buildTypeConfig[process.env.REACT_APP_BUILD_TYPE] };
