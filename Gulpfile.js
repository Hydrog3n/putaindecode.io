var gulp = require("gulp")

gulp.task("server", require("./tasks/server").start)
gulp.task("lang", require("./tasks/lang"))
gulp.task("exports", require("./tasks/exports"))
gulp.task("pages", ["lang", "exports"], require("./tasks/pages"))
gulp.task("icons", require("./tasks/icons"))
gulp.task("fonts", require("./tasks/fonts"))
gulp.task("public", require("./tasks/public"))
gulp.task("images", require("./tasks/images"))
gulp.task("stylesheets", require("./tasks/stylesheets"))
gulp.task("stylesheets:prod", ["icons"], require("./tasks/stylesheets"))
gulp.task("scripts", require("./tasks/scripts"))

gulp.task("watch", require("./tasks/watch"))

// aliases

gulp.task("dist", [
  "public",
  "images",
  "icons",
  "fonts",
  "pages",
  "scripts",
  "stylesheets:prod"
])

gulp.task("default", [
  "dist",
  "server",
  "watch"
])
