const gulp = require("gulp")
const series = gulp.series;
const compileIndex = require("./viewTasks.js").compileIndex

const dev = series(compileIndex, /* server, watchHtml */ )

module.exports = {
    dev: dev
}