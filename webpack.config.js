const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module: {
        rules: [
            {
                test: /\.jsx&$/,
                loaders: ['eslint'],
                include: [
                path.resolve(__dirname, 'src'),
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}