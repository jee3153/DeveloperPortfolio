const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: __dirname + '/../../public/css/'
      }
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      },
    },
  ],
};

const FontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'url-loader?limit=100000'
  ]
};

const imageLoader = {
  test: /\.(png|svg|jpg|gif|mp4)$/,
  use: [
    'file-loader'
  ]
};

const videoLoader = {
  test: /\.mp4$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        // outputPath: 'src/images'
      }
    }
  ]


}


module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
  FontLoader: FontLoader,
  imageLoader: imageLoader,
  videoLoader: videoLoader
};