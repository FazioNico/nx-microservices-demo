module.exports = {
  name: 'core-features-todos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core-features/todos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
