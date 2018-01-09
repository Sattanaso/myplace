module.exports = (express, app, mongo, nodemailer, params, view) => {
    // rest api
    const apiRouter = require('./api')(express, mongo, nodemailer, params);
    app.use('/api', apiRouter);
    
    // view frames
    app.get("/home", view.home);
    app.get("/daily", view.daily);
    app.get("/blog", view.blog);
    app.get("/collections", view.collections);
    app.get("/music", view.music);
    app.get("/music", view.music);
    app.get("/cinema", view.cinema);
    app.get("/games", view.games);
    app.get("/books", view.books);
    app.get("/writing", view.writing);
    app.get("/tests", view.tests);
    app.get("/cv", view.cv);
    app.get("/about", view.about);
    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
