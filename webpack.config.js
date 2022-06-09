const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'production'
const PRODUCTION_BUILD = NODE_ENV !== 'development'

module.exports = {
    mode: PRODUCTION_BUILD ? 'production' : 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'StudentVerificationSDK'
    },
};