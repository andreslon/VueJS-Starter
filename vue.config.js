// vue.config.js
module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    }
}