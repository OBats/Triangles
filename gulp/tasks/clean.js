const gulp   = require("gulp");
const del    = require("del");
const util   = require("gulp-util");
const config = require("../config");

gulp.task("clean", function(cb) {
    return del([
        config.dest.root,
        ".publish/"
    ]).then(function(paths) {
        util.log("Deleted:", util.colors.magenta(paths.join("\n")));
    });
});
