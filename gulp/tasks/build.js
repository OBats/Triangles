const gulp         = require("gulp");
const gulpSequence = require("gulp-sequence");
const config       = require("../config");

function build(cb) {
    gulpSequence(
        "clean",
        config.production ? "sass" : "sass:dev",
        config.production ? "js-uglify" : "",
        config.production ? "copy" : "",
        cb
    );
}

gulp.task("build", function(cb) {
    config.setEnv("production");
    config.logEnv();
    build(cb);
});

gulp.task("build:dev", function(cb) {
    config.setEnv("development");
    config.logEnv();
    build(cb);
});
