const gulp = require('gulp');

gulp.task('taskName', () => {
    return gulp.src('source-files') // Выборка исходных файлов для обработки плагином
        .pipe(plugin()) // Вызов Gulp плагина для обработки файла
        .pipe(gulp.dest('folder')); //Вывод результата в папку назначения dest (destination - пункт назначения)
});