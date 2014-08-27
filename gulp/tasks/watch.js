var gulp   = require("gulp"),
    path   = require("path"),
    config = require("../config");

gulp.task("watch", function() {
    gulp.watch([
            path.join(config.root, "less", "**", "*.less")
        ],
        [ "less" ]
    );
    gulp.watch([
            path.join(config.root, "js", "**", "*.js")
        ],
        [ "browserify" ]
    );
    gulp.watch([
            path.join(config.root, "img", "**")
        ],
        [ "images" ]
    );
});
