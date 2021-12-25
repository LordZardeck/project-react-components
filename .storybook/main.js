module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    modules: {
                        auto: true,
                    },
                }
            },
        }
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    }
};
