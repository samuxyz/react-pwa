const path = require('path');
const root = path.resolve(__dirname, '..');
module.exports = {
  root,
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
  css: path.join(__dirname, 'public/css'),
  components: path.join(__dirname, 'src/components'),
};
