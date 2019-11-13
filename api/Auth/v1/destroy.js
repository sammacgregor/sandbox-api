'use strict';


exports.destroy = function (req, res) {

    if (req.session.views) {

        req.session.destroy(function (err) {
            if (err) {
                return res.send({ error: true, message: 'Error logging out' })

            } else {
                return res.send({ error: false, message: 'Logged out' })

            }
        }
        )



    } else {
        return res.send({ error: true, message: 'No session exists' })

    }


}