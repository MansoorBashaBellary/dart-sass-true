/* global describe, it */

const path = require('path');
const sassTrue = require('sass-true');
const globby = require('globby');
const sass = require('sass');

describe('Sass', () => {
  const sassFile = path.join(__dirname, '../src/components/mixin.spec.scss');

  function importer(url) {
    if (url[0] === '~') {
      url = path.resolve('node_modules', url.substr(1));
    }

    return { file: url };
  }

  sassTrue.runSass(
    {
      importer,
      file: sassFile
    },
    {
      sass: sass,
      describe,
      it
    }
  );
});
