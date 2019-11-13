'use strict';


exports.getAuth = function (req, res) {

    if (req.session.user_id) {
        req.session.views++
        console.log("views: " + req.session.views)
        return res.send({ error: false, message: 'Already authenticated' })

    } else {

        console.log("Session not found")
        return res.send({ error: true, message: 'No session found' })
    }



};
