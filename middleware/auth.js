module.exports = function (req, res, next) {
    if (req.session.user_id) {
        req.session.views++
        console.log("views: " + req.session.views)
        next();

    } else {

        console.log("Session not found")
        res.status(401)
        return res.send({ error: true, message: 'Unauthorized' })
    }

}



