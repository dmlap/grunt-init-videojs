/*
 * grunt-init-videojs
 *
 * Adapted from grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a video.js plugin, including QUnit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should not contain "videojs" or "js" and ' +
  'should be a unique ID not already in use at github.com/videojs/video.js/wiki/Plugins. _Project ' +
  'title_ should be a human-readable title, and doesn\'t need to contain ' +
  'the word "videojs", although it may. For example, a plugin titled "Awesome ' +
  'Plugin" might have the name "awesome-plugin".' +
  '\n\n'+
  'For more information, please see the following documentation:' +
  'https://github.com/videojs/video.js/blob/master/docs/plugins.md';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'videojs'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title', function(value, data, done) {
      // Fix videojs capitalization.
      value = value.replace(/videojs/gi, 'videojs');
      done(null, value);
    }),
    init.prompt('description', 'The best video.js plugin ever.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('videojs_version', '4.1.0')
  ], function(err, props) {
    // A few additional properties.
    props.dependencies = {
      videojs: props.videojs_version || '>= 4'
    };

    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      author_name: props.author_name,
      author_email: props.author_email,
      version: props.version,
      npm_test: 'grunt qunit',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      devDependencies: {
        'grunt-contrib-jshint': '~0.6.0',
        'grunt-contrib-qunit': '~0.2.0',
        'grunt-contrib-concat': '~0.3.0',
        'grunt-contrib-uglify': '~0.2.0',
        'grunt-contrib-watch': '~0.4.0',
        'grunt-contrib-clean': '~0.4.0',
      },
    });

    // All done!
    done();
  });

};
