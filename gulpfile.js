var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var obfuscate = require('gulp-obfuscate');
var sass = require('gulp-sass');
var browserSync=require('browser-Sync').create();


gulp.task('demo', function() {
  gulp.src('js/source/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(concat('todo.js'))
    .pipe(gulp.dest('js/destino'))
});

gulp.task('sass', function() {
  gulp.src('./src/assets/scss/main.scss')
  .pipe(sass({
    outputStyle: "compressed",
  }).on("error", sass.logError))
  .pipe(gulp.dest("./demo/assets/css"))
});

gulp.task("sass-watch", ["sass",], function(done) {
  browserSync.reload();
  done();
})

gulp.task("default", function() {
  browserSync.init({
    server: {
      baseDir: "./demo"
    }
  })
  gulp.watch("./src/assets/scss/main.scss", ["sass-watch"])
})
