const gulp     = require("gulp");
const babel    = require('gulp-babel');
const jsUglify = require("gulp-uglify");
const pump     = require("pump");
const config   = require("../config");
const server   = require("./server");

gulp.task("js-uglify", function (cb) {
  pump([
        gulp.src(config.src.js + "/**/*.js"),
        babel({
          presets: ['es2015']
        }),
        jsUglify(),
        gulp.dest(config.dest.js),
        server.stream()
    ],
    cb
  );
});

gulp.task("js-uglify:watch", function () {
  gulp.watch(config.src.js + "/**/*.js").on("change", server.reload);
})
