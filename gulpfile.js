var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var notifier = require('node-notifier');
var mocha = require('gulp-mocha');
var env = require('gulp-env');
var supertest = require('supertest');

//var server = require('gulp-server-livereload');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
  'reflux',
  'react',
  'react-router',
  'lodash'
];

/*
 |--------------------------------------------------------------------------
 | Notify of errors
 |--------------------------------------------------------------------------
 */

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */

gulp.task('vendor', function() {
  return gulp.src([
    'client/bower_components/jquery/dist/jquery.js',
    'client/bower_components/video.js/dist/video-js/video.js',
    'client/bower_components/videojs-youtube/dist/vjs.youtube.js',
    'client/bower_components/moment/moment.min.js',
    'client/bower_components/moment/min/moment.min.js',
    //'client/bower_components/toastr/toastr.js', MOVED TO PUBLIC WITH CUSTOM DEFAULTS
    'client/bower_components/sweetalert/dist/sweetalert.min.js'
  ]).pipe(concat('vendor.js'))
      .pipe(gulpif(production, uglify({ mangle: false })))
      .pipe(gulp.dest('client/public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function() {
  return browserify()
      .require(dependencies)
      .bundle()
      .pipe(source('vendor.bundle.js'))
      .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
      .pipe(gulp.dest('client/public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function() {
  return browserify('client/components/main.js')
      .external(dependencies)
      .transform(babelify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
      .pipe(gulp.dest('client/public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', ['browserify-vendor'], function() {
  var bundler = watchify(browserify('client/components/main.js', watchify.args));
  bundler.external(dependencies);
  bundler.transform(babelify);
  bundler.on('update', rebundle);
  return rebundle();

  function rebundle() {
    var start = Date.now();
    return bundler.bundle()
        .on('error', function(err) {
          gutil.log(gutil.colors.red(err.toString()));
        })
        .on('end', function() {
          gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('client/public/js/'));
  }
});

/*
 |--------------------------------------------------------------------------
 | Compile SASS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('sass', function () {
  gulp.src('sass/Main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('client/public/css'));
});

/*
 |--------------------------------------------------------------------------
 | Run Mocha Unit Tests
 |--------------------------------------------------------------------------
 */

gulp.task('test', function(){
  gulp.src('test/*.js', {read: false})
      .pipe(mocha({reporter: 'nyan'}))
      .on('error', gutil.log);
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['sass', 'vendor', 'browserify']);
