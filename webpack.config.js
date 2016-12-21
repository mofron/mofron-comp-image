module.exports = {
    entry: __dirname + '/src/image.js',
    output: {
        path: __dirname + '/dist',
        filename: 'image.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
