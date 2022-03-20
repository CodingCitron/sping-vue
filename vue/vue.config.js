const { defineConfig } = require('@vue/cli-service'),
    path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: '../src/main/resources/static',
    //indexPath: '../src/main/resources/static/index.html', // 같은 폴더에 안된다고 말 뜸 사용하면
    devServer: {
        port: 3000,
        /* 개발할때는 끔 ▽ 포트가 2개 일때만 사용 
           스프링 부트 서버에서 프론트 포트를 허용해주면 사용하지 않아도 됨
        proxy: {
            '/': {
                target: 'http://localhost:8080/',
                pathRewrite: { '^/': '' },
                changeOrigin: true,
                secure: false,
            },
        },
        */
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('vue-svg-loader').loader('vue-svg-loader')
    },
})

// https://hyem-study.tistory.com/107
// cors 이슈

// 빌드 할때는 반드시 static 폴더를 지우고 해야함

// https://velog.io/@butterf12/Springboot-VueJS-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95
