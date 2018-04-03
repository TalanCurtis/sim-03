module.exports = function (req, res, next) {
    // if (req.session.user) {
    //     next();
    // } else {
    //     req.session.user = { 
    //         id: 1,
    //         username: 'Session user' }
    //     next();
    // }
    app.use((req, res, next) => {
        if (!req.session.user) {
            req.session.user = {
                id: 1,
                username: "Session"
            }
        }
        next()
    })
}
