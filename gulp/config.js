const util = require("gulp-util");

const production = util.env.production || util.env.prod || false;
const destPath = "build";

let config = {
    env        : "development",
    production : production,

    src: {
        root         : "src",
        // templates    : "src/templates",
        // templatesData: "src/templates/data",
        // pagelist     : "src/index.yaml",
        sass         : "src/sass",
        css          : "src/css",
        js           : "src/js",
        img          : "src/img",
        svg          : "src/img/svg",
        icons        : "src/img/icons",
        // path to png sources for sprite:png task
        iconsPng     : "src/img/icons",
        // path to svg sources for sprite:svg task
        iconsSvg     : "src/img/icons",
        // path to svg sources for iconfont task
        iconsFont    : "src/icons",
        fonts        : "src/fonts",
        lib          : "src/lib"
    },
    dest: {
        root  : destPath,
        html  : destPath,
        css   : destPath + "/css",
        js    : destPath + "/js",
        img   : destPath + "/img",
        fonts : destPath + "/fonts",
        lib   : destPath + "/lib"
    },

    setEnv: function(env) {
        if (typeof env !== "string") return;
        this.env = env;
        this.production = env === "production";
        process.env.NODE_ENV = env;
    },

    logEnv: function() {
        util.log(
            "Environment:",
            config.production ? util.colors.black.bgYellow(" " + process.env.NODE_ENV + " ") : util.colors.white.bgRed(" " + process.env.NODE_ENV + " ")
        );
    },

    errorHandler: require("./util/handle-errors")
};

config.setEnv(production ? "production" : "development");

module.exports = config;
