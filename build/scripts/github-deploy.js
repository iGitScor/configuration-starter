const ghpages = require('gh-pages');
const path = require('path');

const workingDirectory = path.join(__dirname, '..');
const deployedFiles = ['file.txt', '**/*.txt'];

ghpages.publish(
  workingDirectory,
  {
    src: deployedFiles,
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the deployment');
    }
  }
);
