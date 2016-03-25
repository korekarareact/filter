/**
 * Created by changchenyao on 2016/3/24.
 */
module.exports={
  entry:"./app/index.js",
  output:{
        filename:"public/bundle.js"
  },
  module:{
        loaders:[{
            test:/\.js$/,
            exclude:/(node_modules|bower_components)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        }]
  },
  resolve: {
        extensions: ['', '.js', '.json']
  }
};