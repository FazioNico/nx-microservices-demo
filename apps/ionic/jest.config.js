module.exports = {
  name: 'ionic',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ionic/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
