const { defineConfig } = require('@vue/cli-service'),
    path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: '../src/main/resources/static',
    indexPath: '../templates/index.html',
    devServer: {
        proxy: 'http://localhost:8088',
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('vue-svg-loader').loader('vue-svg-loader')
    },
})
