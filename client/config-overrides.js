const webpack=require("webpack");
module.exports=function override(config){
    const fallback=config.resolve.fallback || {};
    Object.assign(fallback,{
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        fs:false,
        http: require.resolve("stream-http"),
        net:false,
        vm:false,
        vm: require.resolve("vm-browserify"),
        https: require.resolve("https-browserify"),
        https: false,

})
config.resolve.fallback=fallback;
config.plugins=(config.plugins || []).concat([new webpack.ProvidePlugin({
    process:"process/browser",
}),])
return config;
};