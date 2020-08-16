module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.tsx', '.ts', '.png'],
                    alias: {
                        "@components": "./src/components/",
                        "@static": "./assets/",
                        "@pages": "./src/pages/",
                        "@routes": "./src/routes/",
                        "@services": "./src/services/",
                        "@styles": "./src/styles/",
                        "@utils": "./src/utils/",
                        "@hooks": "./src/hooks/",
                        "@context": "./src/context/"
                    },
                },
            ]
        ]
    };
};
