const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds

  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before emit
  },

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true, // Enable Hot Module Replacement (HMR)
    port: 3005, // Set the port to 3005
    open: true, // Open the browser when the server starts
    client: {
      webSocketURL: 'ws://localhost:3005/ws', // WebSocket path
    },
    compress: true, // Enable gzip compression
    historyApiFallback: true, // Fallback to index.html for Single Page Applications (SPA)
  },

  // Loaders for handling different file types
  module: {
    rules: [
      // JavaScript/JSX loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Tailwind CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Process CSS with Tailwind
      },
      // Load images and fonts
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Plugins for additional functionality
  plugins: [
    // Plugin for generating the index.html with bundled JavaScript
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],

  // Resolve file extensions for import statements
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
