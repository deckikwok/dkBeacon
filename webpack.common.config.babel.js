const webpack = require('webpack');
const {resolve} = require('path');
const nodeExternals = require('webpack-node-externals');

const {CheckerPlugin} = require('awesome-typescript-loader');
const WebpackStrip = require('webpack-strip');


/** https://shellmonger.com/2016/03/11/creating-javascript-libraries-with-typescript-and-webpack/
 * todo: to test webpack -p.
 * if (yargs.argv.p) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}
 */
module.exports = () => {

    let commonConfigObj = {};

    commonConfigObj.context = __dirname;

    //Resolve==========================================================================================================
    commonConfigObj.resolve = {
        extensions: ['.ts', '.js']
    };

    //Module >> Loaders================================================================================================
    commonConfigObj.externals = [nodeExternals()] // in order to ignore all modules in node_modules folder

    //ALL LOADERS-----------------------------------------------------------------------------------------------------
    commonConfigObj.module = {

        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["env", {"modules": false}]
                            ]
                        }
                    },
                    'ts-loader',
                    //WebpackStrip.loader('debug', 'console.log'), //tsc can remove; set under tsconfig.json
                ],
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            }
        ]
    };

    //Devtools========================================================================================================
    commonConfigObj.devtool = 'inline-source-map';

    //Plugins===========================================================================================================
    //todo: https://github.com/DxCx/ts-library-starter/blob/master/webpack.config.js
    //todo: basically to intercept progress and render.

    commonConfigObj.plugins = [
        //for use with awesome typescript loader //fixme: what's this???
        new CheckerPlugin(),

        // Only emit files when there are no errors
        //new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        //FIXME: using webpack -p mode.. which uglifies and tree shakes
        /*new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
         sourceMap: false,
         exclude:/node_modules/,
         mangle: {
         keep_fnames: true
         }
         })*/
    ]

    /*commonConfigObj.plugins.push(
     new webpack.optimize.DedupePlugin()
     )*/


    //Performance======================================================================================================
    commonConfigObj.performance = {
        hints: "warning" // false //to disable webpacked js file size too big warning msg for dev
    };


    return commonConfigObj;
}
