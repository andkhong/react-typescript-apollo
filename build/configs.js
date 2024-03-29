const path = require('path');

const paths = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  output: path.resolve(__dirname, '..', 'dist', 'bundle'),
  nodeModules: path.resolve(__dirname, '..', 'node_modules'),
  base: path.join(__dirname, '..', 'dist'),
  template: path.resolve(__dirname, '..', 'dist', 'template.html'),

  source: path.resolve(__dirname, '..', 'src'),
  assets: path.resolve(__dirname, '..', 'src', 'assets'),
  components: path.resolve(__dirname, '..', 'src', 'components'),
  gqls: path.resolve(__dirname, '..', 'src', 'gqls'),
  HOCs: path.resolve(__dirname, '..', 'src', 'HOCs'),
  shared: path.resolve(__dirname, '..', 'src', 'shared'),
  styled: path.resolve(__dirname, '..', 'src', 'styled'),
  utils: path.resolve(__dirname, '..', 'src', 'utils')
};

const devPort = 4100;

const devProxys = (process.env.NODE_ENV === 'local') 
  ? "http://localhost:3000/beenest/v1"
  : "https://api-dev.beetoken.com/beenest/v1";

const prodAPIS = "https://api-dev.beetoken.com/beenest/v1";

const vendors = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'styled-components',
  'react-apollo',
  'graphql-tag',
  'apollo-client',
  'apollo-link',
  'apollo-link-http',
  'apollo-link-context',
  'apollo-link-state',
  'apollo-cache-inmemory'
]; // 98.3 kb

module.exports = {
  paths,
  devPort,
  devProxys,
  prodAPIS,
  vendors
};