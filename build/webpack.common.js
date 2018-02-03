const { paths } = require('./configs');

module.exports = {
    entry: {
        index: paths.entry
    },
    output: {
        path: paths.output
    },
    resolve: {
        alias: {
            'src': paths.source,
            'assets': paths.assets,
            'components': paths.components,
            'gqls': paths.gqls,
            'HOCs': paths.HOCs,
            'shared': paths.shared,
            'styled': paths.styled,
            'utils': paths.utils
        },
        extensions: ['.tsx', '.ts', '.js', '.json', '.scss'], // Eliminates need to include extensions when importing
        modules: [paths.source, paths.nodeModules], // src folder will take precedences when searching for file 
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: paths.source,
                exclude: paths.nodeModules,
                loader: ['babel-loader', 'awesome-typescript-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    name (file) {
                        return process.env.NODE_ENV === 'production' 
                            ? '[name]-[hash:5].[ext]'
                            : '[name].[ext]';
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: {
                    loader: 'file-loader',
                    options: { 
                        name (file) {
                            return process.env.NODE_ENV === 'production' 
                                ? '[name]-[hash:5].[ext]'
                                : '[name].[ext]';
                        }
                    }
                }
            }
        ]
    }
};