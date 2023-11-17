require('module-alias/register');
const mongoose = require('mongoose');

const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 14 || (major === 14 && minor <= 0)) {
  console.log('Please download version 8 or greater. ');
  process.exit();
}

require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log(`Mongo DB error`);
});

const glob = require('glob');
const path = require('path');

// glob.sync('./models/**/*.js').forEach(function (file) {
//   require(path.resolve(file));
// });

const app = require('./app');
app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
  console.log(`Server running on PORT : ${server.address().port}`);
});
