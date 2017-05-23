//node
const {resolve} = require('path');

//webpack-specific
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');

module.exports = () => {

    let DEFAULT_PARAMS = require('./webpack.common.config.babel')();

    let clientConfig = {}


    //Output===========================================================================================================
    clientConfig.output = {
        filename: '[name].js',
        path: resolve(__dirname, './lib'),
        library: 'dkbeacon',
        libraryTarget: 'umd',
        umdNamedDefine: true //for name the AMD module of the UMD build else anonymous defined used instead
    }

    //Entry===========================================================================================================
    clientConfig.entry = {
        'dkbeacon': './src/dkbeacon.ts',
    }

    //Target===========================================================================================================
    clientConfig.target = 'node'; // in order to ignore built-in modules like path, fs, etc.


    //Plugin===========================================================================================================


    return WebpackMerge(DEFAULT_PARAMS, clientConfig);

}





