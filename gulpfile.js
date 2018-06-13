const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const gulp = require('gulp');

gulp.task('build', function () {
    console.log('build');
});

gulp.task('preview', function () {
    console.log('preview');
});

gulp.task('publish', function () {
    console.log('publish');
});
