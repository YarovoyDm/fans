const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@scss': path.resolve(__dirname, 'src/scss/'),
            '@types': path.resolve(__dirname, 'src/types/'),
            '@UI': path.resolve(__dirname, 'src/components/UI/'),
        },
    },
};
