module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            // 375
            viewportHeight: 812,
            // 812
            unitToConvert: "px",
            landscape: true, // 是否处理横屏情况
            landscapeWidth: 568,
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        },
    },
}
