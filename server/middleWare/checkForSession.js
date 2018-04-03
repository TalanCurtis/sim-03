module.exports = function (req, res, next) {
    if (!req.session.user) {
        req.session.user ={
            id: 1,
            user_name: "Talan Curtis",
            img: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
            auth_id: 'google-oauth2|102464856930724004100',
            eye_color: 'brown',
            hair_color: 'brown',
            age: 33
        }
    }
    next()
}