const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: (config, { dev }) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }
        config.module.rules.push({
            test: /\.scss/,
            use: [{
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
                'babel-loader',
                'styled-jsx-css-loader', {
                loader: 'sass-loader',
                options: { sourceMap: dev }
            }]
        })
        return config
    }
});
